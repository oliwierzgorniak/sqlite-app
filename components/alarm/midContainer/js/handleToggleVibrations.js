import store from "../../../../redux/store";
import { toggleValue } from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";
import getAlarmFromStore from "../../../../js/getAlarmFromStore";
import { Vibration } from "react-native";

export default async function handleToggleVibrations(alarmId) {
  store.dispatch(toggleValue(alarmId, "areVibrationsEnabled"));

  const alarm = getAlarmFromStore(alarmId);
  if (!alarm.areVibrationsEnabled) Vibration.cancel();
  await Database.update(alarm);
}
