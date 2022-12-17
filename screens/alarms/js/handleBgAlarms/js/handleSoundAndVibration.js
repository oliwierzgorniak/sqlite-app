import { Audio } from "expo-av";
import { Vibration } from "react-native";

const ALARM_DURATION = 10 * 1000;

export default async function handleSoundAndVibration() {
  const { sound } = await Audio.Sound.createAsync(
    require("../../../../../../assets/music-public-domain.ogg")
  );
  await sound.playAsync();
  setInterval(async () => {
    await sound.unloadAsync();
  }, ALARM_DURATION);
  Vibration.vibrate(ALARM_DURATION, true);
}
