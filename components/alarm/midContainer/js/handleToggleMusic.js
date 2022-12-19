import store from "../../../../redux/store";
import {
  removeAlarm,
  toggleValue,
} from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";
import getAlarmFromStore from "../../../../js/getAlarmFromStore";

export default async function handleToggleMusic(alarmId) {
  store.dispatch(toggleValue(alarmId, "isMusicEnabled"));

  const alarm = getAlarmFromStore(alarmId);
  await Database.update(alarm);
}
