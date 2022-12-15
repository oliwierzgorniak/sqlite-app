import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import { useSelector } from "react-redux";
import handleButton from "./js/handleButton";

import styles from "./styles";
import PlusSvg from "../../assets/plus-white.svg";
import TimeSelection from "../../components/timeSelection/TimeSelection";
import { rippleEffect } from "../../js/global";
import handlePressHours from "./js/handlePressHours";
import handlePressMinutes from "./js/handlePressMinutes";

export default ({ navigation }) => {
  const { hours, minutes } = useSelector((state) => state.timeSelection.value);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <TouchableNativeFeedback
          onPress={handlePressHours}
          background={rippleEffect}
        >
          <Text style={styles.time}>{hours}</Text>
        </TouchableNativeFeedback>
        <Text style={styles.time}>:</Text>
        <TouchableNativeFeedback
          onPress={handlePressMinutes}
          background={rippleEffect}
        >
          <Text style={styles.time}>{minutes}</Text>
        </TouchableNativeFeedback>
      </View>
      <TimeSelection />
      <TouchableOpacity
        onPress={() => handleButton(`${hours}:${minutes}`, navigation.goBack)}
        style={styles.addButton}
      >
        <PlusSvg width={styles.icon.width} height={styles.icon.height} />
      </TouchableOpacity>
    </View>
  );
};
