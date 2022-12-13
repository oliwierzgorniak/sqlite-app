import { Text } from "react-native";
const daysNames = ["Nie.", "Pon.", "Wto.", "Śro.", "Czw.", "Pią.", "Sob."];

export default ({ days, style }) => {
  let selectedDaysNames = "";
  days.forEach((d, i) => {
    if (d) selectedDaysNames += daysNames[i] + ", ";
  });

  let sdn = selectedDaysNames;
  if (sdn.length >= 2) selectedDaysNames = sdn.substring(0, sdn.length - 2);

  if (sdn.length > 20) {
    selectedDaysNbames = sdn.substring(0, 20) + "...";
  }

  return <Text style={style}>{selectedDaysNames}</Text>;
};
