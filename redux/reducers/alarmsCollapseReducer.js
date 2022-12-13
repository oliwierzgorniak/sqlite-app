import { createSlice } from "@reduxjs/toolkit";

const alarmsCollapseSlice = createSlice({
  name: "alarmsCollapse",
  initialState: {
    value: [],
  },
  reducers: {
    setAlarmsCollapse: (state, action) => {
      const alarmsCollapse = action.payload;
      state.value = alarmsCollapse;
    },
    addAlarmCollapse: (state, action) => {
      const alarm = action.payload;
      state.value.push(alarm);
    },
    toggleCollapseInAlarm: (state, action) => {
      const alarmId = action.payload;
      const alarmIndex = state.value.findIndex((a) => a.id === alarmId);

      const isCollapsed = state.value[alarmIndex].isCollapsed;
      state.value[alarmIndex].isCollapsed = !isCollapsed;
    },
  },
});

export const { setAlarmsCollapse, addAlarmCollapse, toggleCollapseInAlarm } =
  alarmsCollapseSlice.actions;
export default alarmsCollapseSlice.reducer;
