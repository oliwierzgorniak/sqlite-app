import { View, TouchableOpacity } from "react-native";

import { useSelector } from "react-redux";

import handleDelete from "./js/handleDelete";
import handleToggleDays from "./js/handleToggleDays";

import TrashSvg from "../../../assets/trash.svg";
import ArrowSvg from "../../../assets/arrow.svg";

import styles from "./styles";

export default ({ alarmId, animatedHeight }) => {
  const alarms = useSelector((state) => state.alarms.value);
  let { isCollapsed, isCollapsedForStyles } = alarms.find(
    (a) => a.id === alarmId
  );

  return (
    <View
      style={{
        ...styles.container,
        marginBottom: isCollapsed ? 2 : 0,
      }}
    >
      <TouchableOpacity onPress={() => handleDelete(alarmId)}>
        <TrashSvg
          width={styles.deleteIcon.width}
          height={styles.deleteIcon.height}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleToggleDays(animatedHeight, alarmId)}
        style={{
          transform: [{ rotate: isCollapsedForStyles ? "0deg" : "180deg" }],
        }}
      >
        <ArrowSvg
          width={styles.daysToggleIcon.width}
          height={styles.daysToggleIcon.height}
        />
      </TouchableOpacity>
    </View>
  );
};
