import { View, Text, Switch } from "react-native";

import DaysText from "./daysText/DaysText";

import { useSelector } from "react-redux";

import handleSwitch from "./js/handleSwitch";

import colors from "../../../styles/colors";
import styles from "./styles";

export default ({ alarmId }) => {
  const alarms = useSelector((state) => state.alarms.value);
  let { time, days, isEnabled } = alarms.find((a) => a.id === alarmId);

  return (
    <View style={styles.container}>
      <View style={styles.timeDaysContainer}>
        <Text style={styles.timeText}>{time}</Text>
        <DaysText days={days} style={styles.daysText} />
      </View>
      <Switch
        style={styles.switch}
        trackColor={{ false: colors.grayLight, true: colors.green }}
        thumbColor={colors.thumbColor}
        onValueChange={() => handleSwitch(alarmId)}
        value={isEnabled === 1}
      />
    </View>
  );
};
