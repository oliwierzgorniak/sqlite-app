import { Animated } from "react-native";
import store from "../../../../redux/store";
import {
  toggleCollapseInAlarm,
  toggleCollapseForStylesInAlarm,
  toggleIsToggleButtonBlocked,
} from "../../../../redux/reducers/alarmsReducer";

export default function handleToggleDays(height, alarmId) {
  const state = store.getState();
  const alarms = state.alarms.value;
  const { isCollapsed, isToggleButtonBlocked } = alarms.find(
    (a) => a.id === alarmId
  );

  if (isToggleButtonBlocked) return;
  store.dispatch(toggleIsToggleButtonBlocked(alarmId));

  if (isCollapsed) {
    Animated.spring(height, {
      toValue: 50,
      useNativeDriver: false,
    }).start(() => store.dispatch(toggleIsToggleButtonBlocked(alarmId)));
    store.dispatch(toggleCollapseInAlarm(alarmId));
    store.dispatch(toggleCollapseForStylesInAlarm(alarmId));
  } else {
    store.dispatch(toggleCollapseForStylesInAlarm(alarmId));
    Animated.spring(height, {
      toValue: 2,
      useNativeDriver: false,
    }).start(() => {
      store.dispatch(toggleIsToggleButtonBlocked(alarmId));
      store.dispatch(toggleCollapseInAlarm(alarmId));
    });
  }
}
