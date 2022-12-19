import { Audio } from "expo-av";
let sound;
let isSoundLoaded = false;
export default async function getSound() {
  if (isSoundLoaded) return sound;

  const createResult = await Audio.Sound
    .createAsync
    // require("../../../assets/music-public-domain.mp3")
    ();
  const loadedSound = createResult.sound;
  sound = loadedSound;
  isSoundLoaded = true;
  return loadedSound;
}
