import { Text, TouchableNativeFeedback, View } from "react-native";
import styles from "./styles";

import AppIconSvg from "../../assets/app-icon.svg";
import { rippleEffect } from "../../js/global";

export default ({ navigation }) => {
  return (
    <TouchableNativeFeedback
      background={rippleEffect}
      onPress={() => navigation.navigate("Alarms")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sqlite App 2</Text>
        <AppIconSvg width={styles.icon.width} height={styles.icon.height} />
      </View>
    </TouchableNativeFeedback>
  );
};
