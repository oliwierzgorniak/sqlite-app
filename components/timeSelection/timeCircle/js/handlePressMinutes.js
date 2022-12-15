import store from "../../../../redux/store";
import {
  setMinutes,
  incrementMinutes,
  handleFirstClick,
} from "../../../../redux/reducers/timeSelectionReducer";

export default function handlePress(minutes) {
  const state = store.getState();
  const timeSelection = state.timeSelection.value;
  let { isMinutesFirstClick, lastClickedValue } = timeSelection;
  if (isMinutesFirstClick || lastClickedValue !== minutes) {
    store.dispatch(handleFirstClick(minutes));
  } else store.dispatch(incrementMinutes());
}
