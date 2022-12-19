import { Vibration } from "react-native";

const ALARM_DURATION = 2 * 1000;

export default async function handleSoundAndVibration(sound) {
  await sound.playAsync();
  setInterval(async () => {
    await sound.unloadAsync();
  }, ALARM_DURATION);
  Vibration.vibrate(ALARM_DURATION, true);
}
