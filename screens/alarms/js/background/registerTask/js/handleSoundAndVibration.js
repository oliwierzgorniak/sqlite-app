import { Vibration } from "react-native";

const VIBRATION_DURATION = 10 * 1000;

export default async function handleSoundAndVibration() {
  const { sound } = await Audio.Sound.createAsync(
    require("../../../../../../assets/music-public-domain.ogg")
  );
  await sound.playAsync();
  // TODO disable sound after time
  Vibration.vibrate(VIBRATION_DURATION, true);
}
