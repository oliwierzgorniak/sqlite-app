import getLeft from "./getLeft";
import getTop from "./getTop";

import colors from "../../../../styles/colors";
import { containerWidth as containerWidthOuter } from "../../styles";

export default function getStyles(i, isInner = false) {
  const containerWidth = isInner ? 220 : containerWidthOuter;
  const buttonWidthHeight = isInner ? 36 : 50;
  const fontSize = isInner ? 15 : 20;
  const buttonColor = isInner ? colors.teal : colors.grayLight;

  return {
    top: getTop(i, containerWidth, buttonWidthHeight),
    left: getLeft(i, containerWidth, buttonWidthHeight),
    width: buttonWidthHeight,
    height: buttonWidthHeight,
    fontSize: fontSize,
    backgroundColor: buttonColor,
  };
}
