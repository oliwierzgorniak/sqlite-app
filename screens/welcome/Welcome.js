import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import AppIconSvg from "../../assets/app-icon.svg";

export default ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Alarms")}
      style={styles.container}
    >
      <Text style={styles.title}>Sqlite App 2</Text>
      <AppIconSvg width={styles.icon.width} height={styles.icon.height} />
    </TouchableOpacity>
  );
};
