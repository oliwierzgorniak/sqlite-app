import { Vibration } from "react-native";
import getAlarmFromStore from "../../../../js/getAlarmFromStore";
import getRemainingTime from "./getRemainingTime";
import { Audio } from "expo-av";
import { sounds } from "./storage";

const ALARM_DURATION = 10 * 1000;

export default async function handleSoundVib(alarmId) {
  const { isEnabled, isMusicEnabled, areVibrationsEnabled, time } =
    getAlarmFromStore(alarmId);

  setTimeout(async () => {
    if (!isEnabled) return;

    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/music-public-domain.mp3")
    );
    sounds.push({ id: alarmId, sound: sound });

    if (isMusicEnabled) {
      await sound.playAsync();
    }

    setTimeout(async () => {
      if (sound) {
        await sound.unloadAsync();
        Vibration.cancel();
      }
    }, ALARM_DURATION);

    if (areVibrationsEnabled) {
      Vibration.vibrate(ALARM_DURATION, true);
    }
  }, getRemainingTime(time));
}
