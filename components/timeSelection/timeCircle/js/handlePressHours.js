import store from "../../../../redux/store";
import {
  setHours,
  setIsHoursMode,
} from "../../../../redux/reducers/timeSelectionReducer";

export default function handlePress(hour) {
  store.dispatch(setHours(hour));
  store.dispatch(setIsHoursMode(false));
}
