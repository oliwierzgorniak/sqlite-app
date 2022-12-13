import { TouchableNativeFeedback, View, Text } from "react-native";

import getLeft from "./js/getLeft";
import getTop from "./js/getTop";

import styles from "./styles";
import { rippleEffect } from "../../global";
import colors from "../../styles/colors";
import { containerWidth as containerWidthOuter } from "../hoursSelection/styles";

export default function TimeCircle({ elements, isInner = false }) {
  const containerWidth = isInner ? 220 : containerWidthOuter;
  const buttonWidthHeight = isInner ? 36 : 50;
  const fontSize = isInner ? 15 : 20;
  const buttonColor = isInner ? colors.teal : colors.grayLight;

  return (
    <View>
      {elements.map((el, i) => (
        <View
          style={{
            ...styles.buttonContainer,
            top: getTop(i, containerWidth, buttonWidthHeight),
            left: getLeft(i, containerWidth, buttonWidthHeight),
            width: buttonWidthHeight,
            height: buttonWidthHeight,
            fontSize: fontSize,
            backgroundColor: buttonColor,
          }}
          key={isInner ? "inner" + i : i}
        >
          <TouchableNativeFeedback background={rippleEffect}>
            <Text style={styles.buttonText}>{el}</Text>
          </TouchableNativeFeedback>
        </View>
      ))}
    </View>
  );
}
