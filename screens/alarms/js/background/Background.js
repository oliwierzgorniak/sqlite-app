import { Audio } from "expo-av";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import { Vibration } from "react-native";
import getTime from "./js/getTime";
import handleSoundAndVibration from "./js/handleSoundAndVibration";

class Background {
  constructor() {
    this.TAKS_NAME = "check-alarms";
    this.enabledAlarms = [];
  }

  async handleLoadingSound() {
    if (this.sound) return;
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/music-public-domain.mp3")
    );
    this.sound = sound;
    return this.sound;
  }

  defineTask() {
    TaskManager.defineTask(this.TAKS_NAME, async () => {
      const time = getTime();
      this.enabledAlarms.forEach((a) => {
        if (a.time === time) {
          handleSoundAndVibration(this.sound);
        }
      });

      Vibration.vibrate([100, 100], true);

      // Be sure to return the successful result type!
      return BackgroundFetch.BackgroundFetchResult.NewData;
    });
    console.log("defined");
  }

  async registerTask() {
    return BackgroundFetch.registerTaskAsync(this.TAKS_NAME, {
      minimumInterval: 3, // 3 seconds
      stopOnTerminate: false,
      startOnBoot: true,
    });
  }
}

export default background = new Background();
