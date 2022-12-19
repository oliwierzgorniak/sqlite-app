import store from "../../../../redux/store";
import {
  removeAlarm,
  toggleValue,
} from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";
import getAlarmFromStore from "../../../../js/getAlarmFromStore";
import { sounds } from "../../topContainer/js/storage";

export default async function handleToggleMusic(alarmId) {
  store.dispatch(toggleValue(alarmId, "isMusicEnabled"));

  const alarm = getAlarmFromStore(alarmId);
  if (!alarm.isMusicEnabled) {
    const soundIndex = sounds.findIndex((s) => s.id === alarmId);
    await sounds[soundIndex].sound.unloadAsync();
    sounds.splice(soundIndex, 1);
  }
  await Database.update(alarm);
}
