import { View, Text, TouchableNativeFeedback } from "react-native";

import { useSelector } from "react-redux";
import handleButton from "./js/handleButton";

import styles from "./styles";
import PlusSvg from "../../assets/plus-white.svg";
import TimeSelection from "../../components/timeSelection/TimeSelection";
import { rippleEffect } from "../../js/global";
import handlePressHours from "./js/handlePressHours";
import handlePressMinutes from "./js/handlePressMinutes";
import colors from "../../styles/colors";

export default ({ navigation }) => {
  const { hours, minutes, isHoursMode } = useSelector(
    (state) => state.timeSelection.value
  );

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <TouchableNativeFeedback
          onPress={handlePressHours}
          background={rippleEffect}
        >
          <View>
            <Text
              style={{
                ...styles.time,
                color: isHoursMode ? colors.teal : colors.black,
              }}
            >
              {hours}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.time}>:</Text>
        <TouchableNativeFeedback
          onPress={handlePressMinutes}
          background={rippleEffect}
        >
          <View>
            <Text
              style={{
                ...styles.time,
                color: isHoursMode ? colors.black : colors.teal,
              }}
            >
              {minutes}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <TimeSelection />
      <TouchableNativeFeedback
        background={rippleEffect}
        onPress={() => handleButton(`${hours}:${minutes}`, navigation.goBack)}
        style={styles.addButton}
      >
        <View>
          <PlusSvg width={styles.icon.width} height={styles.icon.height} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
