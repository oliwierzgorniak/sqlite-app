import { TouchableNativeFeedback, View, Text } from "react-native";

import getStyles from "./js/getStyles";
import handlePressHours from "./js/handlePressHours";
import handlePressMinutes from "./js/handlePressMinutes";

import styles from "./styles";
import { rippleEffect } from "../../../js/global";

export default function TimeCircle({
  isMinutesSelection = false,
  elements,
  isInner = false,
}) {
  return (
    <View>
      {elements.map((el, i) => (
        <View
          style={{
            ...styles.buttonContainer,
            ...getStyles(i, isInner),
          }}
          key={isInner ? "inner" + i : i}
        >
          <TouchableNativeFeedback
            onPress={
              isMinutesSelection
                ? () => handlePressMinutes(el)
                : () => handlePressHours(el)
            }
            background={rippleEffect}
          >
            <View>
              <Text style={styles.buttonText}>{el}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      ))}
    </View>
  );
}
