export default function getAlarmData(alarmData) {
  return {
    ...alarmData,
    days: [0, 0, 0, 0, 0, 0, 0],
    isMusicEnabled: 0,
    areVibrationsEnabled: 0,
    isCollapsed: true,
    isCollapsedForStyles: true,
    isToggleButtonBlocked: 0,
  };
}
