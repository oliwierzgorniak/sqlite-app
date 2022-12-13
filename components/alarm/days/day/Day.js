import { Text, TouchableNativeFeedback, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { toggleDayInAlarm } from "../../../../redux/reducers/alarmsReducer";
import getDayNameFromIndex from "./js/getDayNameFromIndex";

import styles from "./styles";
import colors from "../../../../styles/colors";
import { rippleEffect } from "../../../../global";

export default ({ alarmId, dayIndex }) => {
  const dispatch = useDispatch();

  const alarms = useSelector((state) => state.alarms.value);
  const { isCollapsedForStyles, days } = alarms.find((a) => a.id === alarmId);
  const isDaySelected = days[dayIndex];

  return (
    <TouchableNativeFeedback
      background={rippleEffect}
      onPress={() => dispatch(toggleDayInAlarm(alarmId, dayIndex))}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: isDaySelected ? colors.gray : colors.white,
          borderWidth: isCollapsedForStyles ? 0 : 1,
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: isDaySelected ? colors.white : colors.gray,
          }}
        >
          {getDayNameFromIndex(dayIndex)}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
