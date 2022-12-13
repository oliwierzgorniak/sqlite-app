import store from "../../../../redux/store";
import { toggleAlarmActivity } from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";

export default async function handleSwitch(id) {
  store.dispatch(toggleAlarmActivity(id));

  const state = store.getState();
  const alarms = state.alarms.value;
  const currentAlarm = alarms.find((a) => a.id === id);
  await Database.update(currentAlarm);
}
