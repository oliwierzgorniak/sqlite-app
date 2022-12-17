import * as BackgroundFetch from "expo-background-fetch";
import { BACKGROUND_FETCH_TASK } from "./shared";

export default async function registerTask() {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 30, // 30 seconds
    stopOnTerminate: false,
    startOnBoot: true,
  });
}
