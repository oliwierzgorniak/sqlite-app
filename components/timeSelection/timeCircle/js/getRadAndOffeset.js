export default function getRadAndOffeset(i, buttonWidth) {
  const degrees = i * 30 - 90;
  const rad = (degrees * Math.PI) / 180;
  const offset = -buttonWidth / 2;

  return { rad, offset };
}
