import { View, TouchableOpacity, TouchableNativeFeedback } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import handleDelete from "./js/handleDelete";
import handleToggleDays from "./js/handleToggleDays";
import handleToggleVibrations from "./js/handleToggleVibrations";
import handleToggleMusic from "./js/handleToggleMusic";

import TrashSvg from "../../../assets/trash.svg";
import ArrowSvg from "../../../assets/arrow.svg";
import VibrationSvg from "../../../assets/vibration.svg";
import MusicSvg from "../../../assets/music.svg";

import styles from "./styles";
import { rippleEffect } from "../../../js/global";

export default ({ alarmId, animatedHeight }) => {
  const alarms = useSelector((state) => state.alarms.value);
  let {
    isCollapsed,
    isCollapsedForStyles,
    isMusicEnabled,
    areVibrationsEnabled,
  } = alarms.find((a) => a.id === alarmId);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        ...styles.container,
        marginBottom: isCollapsed ? 2 : 0,
      }}
    >
      <View style={styles.leftButtonsContainer}>
        <TouchableNativeFeedback
          onPress={() => handleDelete(alarmId)}
          background={rippleEffect}
        >
          <View style={styles.icon}>
            <TrashSvg width={styles.icon.width} height={styles.icon.height} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => handleToggleMusic(alarmId)}
          background={rippleEffect}
          style={styles.icon}
        >
          <View style={styles.icon}>
            <MusicSvg width={styles.icon.width} height={styles.icon.height} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => handleToggleVibrations(alarmId)}
          background={rippleEffect}
        >
          <View style={styles.icon}>
            <VibrationSvg
              width={styles.icon.width}
              height={styles.icon.height}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
      <TouchableNativeFeedback
        onPress={() => handleToggleDays(animatedHeight, alarmId)}
        background={rippleEffect}
        style={{
          transform: [{ rotate: isCollapsedForStyles ? "0deg" : "180deg" }],
        }}
      >
        <ArrowSvg width={styles.icon.width} height={styles.icon.height} />
      </TouchableNativeFeedback>
    </View>
  );
};
