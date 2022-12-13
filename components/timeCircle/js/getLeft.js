import getRadAndOffset from "./getRadAndOffeset";

export default function getLeft(i, width, buttonWidth) {
  const { rad, offset } = getRadAndOffset(i, width, buttonWidth);
  const circleRadius = width / 2;
  return (circleRadius - buttonWidth / 2) * Math.cos(rad) + offset;
}
