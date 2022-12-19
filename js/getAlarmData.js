export default function getAlarmData(alarmData) {
  return {
    ...alarmData,
    days: [0, 0, 0, 0, 0, 0, 0],
    isCollapsed: 1,
    isCollapsedForStyles: 1,
    isToggleButtonBlocked: 0,
  };
}
