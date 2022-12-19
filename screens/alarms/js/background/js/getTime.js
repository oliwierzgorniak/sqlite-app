import get2DigitString from "../../../../../js/get2DigitString";

export default function getTime() {
  const date = new Date();
  const hours = get2DigitString(date.getHours());
  const minutes = get2DigitString(date.getMinutes());
  const time = hours + ":" + minutes;
  return time;
}
