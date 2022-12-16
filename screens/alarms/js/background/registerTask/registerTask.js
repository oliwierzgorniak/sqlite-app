import * as TaskManager from "expo-task-manager";
import { Audio } from "expo-av";
import { BACKGROUND_FETCH_TASK } from "../shared";
import store from "../../../../../redux/store";
import getTime from "./js/getTime";

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  const time = getTime();

  const state = store.getState();
  const alarms = state.alarms.value;
  alarms.forEach((a) => {
    if (a.time === time) {
    }
  });

  // Be sure to return the successful result type!
  return BackgroundFetch.BackgroundFetchResult.NewData;
});
