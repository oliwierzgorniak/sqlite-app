import { View } from "react-native";
import TimeCircle from "../timeCircle/TimeCircle";

import { hoursAm, hoursPm } from "../../global";
import styles from "./styles";

export default function TimeSelection() {
  return (
    <View style={styles.container}>
      <TimeCircle elements={hoursAm} />
      <TimeCircle elements={hoursPm} isInner={true} />
    </View>
  );
}
