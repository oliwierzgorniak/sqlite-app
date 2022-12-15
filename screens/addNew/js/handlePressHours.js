import {
  setIsHoursMode,
  setLastClickedValue,
} from "../../../redux/reducers/timeSelectionReducer";
import store from "../../../redux/store";

export default function handlePressHours() {
  store.dispatch(setIsHoursMode(true));
  store.dispatch(setLastClickedValue(null));
}
