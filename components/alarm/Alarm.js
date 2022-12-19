import { View, Animated } from "react-native";
import { useEffect, useRef } from "react";

import { useSelector } from "react-redux";

import Days from "./days/Days";

import styles from "./styles";
import TopContainer from "./topContainer/TopContainer";
import MidContainer from "./midContainer/MidContainer";
import handleSoundVib from "./topContainer/js/handleSoundVib";

export default ({ alarmId }) => {
  let isEditMode = useSelector((state) => state.isEditMode.value);

  const alarms = useSelector((state) => state.alarms.value);
  let { isCollapsed } = alarms.find((a) => a.id === alarmId);

  useEffect(() => {
    handleSoundVib(alarmId);
  }, []);

  const animatedHeight = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <TopContainer alarmId={alarmId} />
      {isEditMode && (
        <MidContainer alarmId={alarmId} animatedHeight={animatedHeight} />
      )}
      {!isCollapsed && (
        <Days animatedHeight={animatedHeight} alarmId={alarmId} />
      )}
    </View>
  );
};
