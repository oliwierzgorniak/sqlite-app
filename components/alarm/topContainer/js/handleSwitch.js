import store from "../../../../redux/store";
import { toggleValue } from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";
import getAlarmFromStore from "../../../../js/getAlarmFromStore";
import Background from "../../../../screens/alarms/js/background/Background";
import handleSoundVib from "./handleSoundVib";

export default async function handleSwitch(alarmId) {
  store.dispatch(toggleValue(alarmId, "isEnabled"));

  const alarm = getAlarmFromStore(alarmId);
  handleSoundVib(alarmId);
  await Database.update(alarm);

  // BACKGROUND
  // const alarmDataBg = { id: alarmId, time: alarm.time };
  // if (alarm.isEnabled) {
  //   Background.enabledAlarms.push(alarmDataBg);
  // } else {
  //   const alarmIndex = Background.enabledAlarms.findIndex(
  //     (a) => a.id === alarmId
  //   );
  //   Background.enabledAlarms.splice(alarmIndex, 1);
  // }
}
