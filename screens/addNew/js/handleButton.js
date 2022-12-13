import Database from "../../../db/Database";
import { setAlarms } from "../../../redux/reducers/alarmsReducer";
import { setAlarmsCollapse } from "../../../redux/reducers/alarmsCollapseReducer";
import store from "../../../redux/store";

export default async function handleButton(time, goBack) {
  await Database.add(time, 0);
  const alarms = await Database.getAll();

  const alarmsWithDays = alarms.map((a) => ({
    ...a,
    days: [false, false, false, false, false, false, false],
    isCollapsed: true,
    isCollapsedForStyles: true,
    isToggleButtonBlocked: false,
  }));
  store.dispatch(setAlarms(alarmsWithDays));

  goBack();
}
