import { Animated } from "react-native";
import store from "../../../../redux/store";
import {
  toggleCollapseInAlarm,
  toggleCollapseForStylesInAlarm,
  toggleIsToggleButtonBlocked,
  toggleValue,
} from "../../../../redux/reducers/alarmsReducer";
import getAlarmFromStore from "../../../../js/getAlarmFromStore";

export default function handleToggleDays(height, alarmId) {
  const { isCollapsed, isToggleButtonBlocked } = getAlarmFromStore(alarmId);

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
