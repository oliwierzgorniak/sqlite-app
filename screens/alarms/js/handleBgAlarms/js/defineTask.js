import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";
import { BACKGROUND_FETCH_TASK } from "./shared";
import getTime from "./js/getTime";
import alarms from "../../../../../js/enabledAlarmsStore";
import handleSoundAndVibration from "./handleSoundAndVibration";

export default function defineTask() {
  TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    const time = getTime();
    alarms.forEach((a) => {
      if (a.time === time) {
        handleSoundAndVibration();
      }
    });

    // Be sure to return the successful result type!
    return BackgroundFetch.BackgroundFetchResult.NewData;
  });
}
