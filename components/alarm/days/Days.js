import { Animated } from "react-native";
import { useSelector } from "react-redux";

import Day from "./day/Day";

import styles from "./styles";

export default ({ animatedHeight, alarmId }) => {
  const alarms = useSelector((state) => state.alarms.value);
  const { isCollapsedForStyles } = alarms.find((a) => a.id === alarmId);

  return (
    <Animated.View
      style={{
        ...styles.container,
        height: animatedHeight,
        marginTop: isCollapsedForStyles ? 0 : 20,
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
        <Day dayIndex={dayIndex} alarmId={alarmId} key={dayIndex} />
      ))}
    </Animated.View>
  );
};
