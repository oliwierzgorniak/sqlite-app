export default function getRemainingTime(time) {
  const currDate = new Date();

  const alarmMinutes = +time.split(":")[1];
  const alarmHours = +time.split(":")[0];
  let futureDate = new Date(currDate.getTime());
  futureDate.setMinutes(alarmMinutes);
  futureDate.setHours(alarmHours);

  // if this hours and minutes have passed this day
  if (futureDate.getTime() - currDate.getTime() < 0) {
    futureDate.setDate(futureDate.getDate() + 1);
  }
  return futureDate.getTime() - currDate.getTime();
}
