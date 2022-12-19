import store from "../redux/store";

export default function getAlarmFromStore(alarmId) {
  const state = store.getState();
  const alarms = state.alarms.value;
  const alarm = alarms.find((a) => (a.id = alarmId));
  return alarm;
}
