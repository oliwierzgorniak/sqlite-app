import { View, Text, Switch } from "react-native";

import DaysText from "./daysText/DaysText";
import MusicSvg from "../../../assets/music.svg";
import VibrationSvg from "../../../assets/vibration.svg";

import { useSelector } from "react-redux";

import handleSwitch from "./js/handleSwitch";

import colors from "../../../styles/colors";
import styles from "./styles";

export default ({ alarmId }) => {
  const alarms = useSelector((state) => state.alarms.value);
  let { time, days, isEnabled, isMusicEnabled, areVibrationsEnabled } =
    alarms.find((a) => a.id === alarmId);

  return (
    <View style={styles.container}>
      <View style={styles.timeInfoContainer}>
        <Text style={styles.timeText}>{time}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.iconsContainer}>
            {!!isMusicEnabled && (
              <View style={styles.iconContainer}>
                <MusicSvg
                  width={styles.icon.width}
                  height={styles.icon.height}
                />
              </View>
            )}
            {!!areVibrationsEnabled && (
              <View>
                <VibrationSvg
                  width={styles.icon.width}
                  height={styles.icon.height}
                />
              </View>
            )}
          </View>
          <DaysText days={days} />
        </View>
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
