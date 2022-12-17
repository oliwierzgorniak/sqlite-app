import store from "../../../../redux/store";
import { toggleValue } from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";

export default async function handleSwitch(alarmId) {
  store.dispatch(toggleValue(alarmId, "isEnabled"));

  const state = store.getState();
  const alarms = state.alarms.value;
  const currentAlarm = alarms.find((a) => a.id === alarmId);
  await Database.update(currentAlarm);
}
