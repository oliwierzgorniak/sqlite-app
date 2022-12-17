import { Text, View } from "react-native";
import styles from "./styles";
const daysNames = ["Nie.", "Pon.", "Wto.", "Śro.", "Czw.", "Pią.", "Sob."];

export default ({ days }) => {
  let selectedDaysNames = "";
  days.forEach((d, i) => {
    if (d) selectedDaysNames += daysNames[i] + ", ";
  });

  let sdn = selectedDaysNames;
  if (sdn.length >= 2) selectedDaysNames = sdn.substring(0, sdn.length - 2);

  if (sdn.length > 20) {
    selectedDaysNames = sdn.substring(0, 20) + "...";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selectedDaysNames}</Text>
    </View>
  );
};
