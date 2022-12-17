import { Animated } from "react-native";
import store from "../../../../redux/store";
import {
  toggleCollapseInAlarm,
  toggleCollapseForStylesInAlarm,
  toggleIsToggleButtonBlocked,
  toggleValue,
} from "../../../../redux/reducers/alarmsReducer";

export default function handleToggleDays(height, alarmId) {
  const state = store.getState();
  const alarms = state.alarms.value;
  const { isCollapsed, isToggleButtonBlocked } = alarms.find(
    (a) => a.id === alarmId
  );

  if (isToggleButtonBlocked) return;
  store.dispatch(toggleValue(alarmId, "isToggleButtonBlocked"));

  if (isCollapsed) {
    Animated.spring(height, {
      toValue: 50,
      useNativeDriver: false,
    }).start(() =>
      store.dispatch(toggleValue(alarmId, "isToggleButtonBlocked"))
    );
    store.dispatch(toggleValue(alarmId, "isCollapsed"));
    store.dispatch(toggleValue(alarmId, "isCollapsedForStyles"));
  } else {
    store.dispatch(toggleValue(alarmId, "isCollapsedForStyles"));
    Animated.spring(height, {
      toValue: 2,
      useNativeDriver: false,
    }).start(() => {
      store.dispatch(toggleValue(alarmId, "isToggleButtonBlocked"));
      store.dispatch(toggleValue(alarmId, "isCollapsed"));
    });
  }
}
