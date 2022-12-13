import Database from "../../../db/Database";
import store from "../../../redux/store";
import { setAlarms } from "../../../redux/reducers/alarmsReducer";
import { setAlarmsCollapse } from "../../../redux/reducers/alarmsCollapseReducer";

export default async function getAndSetAlarms() {
  await Database.createTable();
  const alarms = await Database.getAll();
  const alarmsWithDays = alarms.map((a) => ({
    ...a,
    days: [false, false, false, false, false, false, false],
    isCollapsed: true,
    isCollapsedForStyles: true,
    isToggleButtonBlocked: false,
  }));
  store.dispatch(setAlarms(alarmsWithDays));
}
