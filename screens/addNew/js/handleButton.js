import Database from "../../../db/Database";
import { setAlarms } from "../../../redux/reducers/alarmsReducer";
import { setAlarmsCollapse } from "../../../redux/reducers/alarmsCollapseReducer";
import store from "../../../redux/store";
import getAlarmData from "../../../js/getAlarmData";

export default async function handleButton(time, goBack) {
  await Database.add(time, 0);
  const alarms = await Database.getAll();

  const alarmsEnhanced = alarms.map((a) => getAlarmData(a));
  store.dispatch(setAlarms(alarmsEnhanced));

  goBack();
}
