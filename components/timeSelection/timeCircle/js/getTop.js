import getRadAndOffset from "./getRadAndOffeset";

export default function getTop(i, containerWidth, buttonWidth) {
  const { rad, offset } = getRadAndOffset(i, buttonWidth);
  const circleRadius = containerWidth / 2;
  return (circleRadius - buttonWidth / 2) * Math.sin(rad) + offset;
}
