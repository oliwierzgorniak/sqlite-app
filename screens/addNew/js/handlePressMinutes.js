import { setIsHoursMode } from "../../../redux/reducers/timeSelectionReducer";
import store from "../../../redux/store";

export default function handlePressMinutes() {
  store.dispatch(setIsHoursMode(false));
}
