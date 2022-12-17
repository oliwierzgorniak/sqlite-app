import store from "../../../../redux/store";
import { toggleValue } from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";

export default function handleToggleVibrations(alarmId) {
  store.dispatch(toggleValue(alarmId, "areVibrationsEnabled"));
}
