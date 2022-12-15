import Database from "../../../db/Database";
import store from "../../../redux/store";
import { setAlarms } from "../../../redux/reducers/alarmsReducer";
import getAlarmData from "../../../js/getAlarmData";

export default async function getAndSetAlarms() {
  await Database.createTable();
  const alarms = await Database.getAll();
  const alarmsEnhanced = alarms.map((a) => getAlarmData(a));
  store.dispatch(setAlarms(alarmsEnhanced));
}
