import store from "../../../../redux/store";
import {
  removeAlarm,
  toggleValue,
} from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";

export default function handleToggleMusic(alarmId) {
  store.dispatch(toggleValue(alarmId, "isMusicEnabled"));
}
