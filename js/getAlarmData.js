export default function getAlarmData(alarmData) {
  return {
    ...alarmData,
    days: [false, false, false, false, false, false, false],
    isMusicEnabled: false,
    areVibrationsEnabled: false,
    isCollapsed: true,
    isCollapsedForStyles: true,
    isToggleButtonBlocked: false,
  };
}
