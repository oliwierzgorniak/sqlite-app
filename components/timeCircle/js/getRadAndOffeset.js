import { buttonWidthHeight } from "../styles";

export default function getRadAndOffeset(i, width, buttonWidth) {
  const degrees = i * 30;
  const rad = (degrees * Math.PI) / 180;
  const offset = -buttonWidth / 2;

  return { rad, offset };
}
