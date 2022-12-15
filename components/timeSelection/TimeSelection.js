import { View } from "react-native";
import TimeCircle from "./timeCircle/TimeCircle";

import { useSelector } from "react-redux";
import { hoursAm, hoursPm, minutes } from "../../js/global";
import styles from "./styles";

export default function TimeSelection() {
  let { isHoursMode } = useSelector((state) => state.timeSelection.value);

  return (
    <View style={styles.container}>
      {isHoursMode && (
        <>
          <TimeCircle elements={hoursAm} />
          <TimeCircle elements={hoursPm} isInner={true} />
        </>
      )}
      {!isHoursMode && (
        <>
          <TimeCircle isMinutesSelection={true} elements={minutes} />
        </>
      )}
    </View>
  );
}
