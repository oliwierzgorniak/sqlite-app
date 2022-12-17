import { createSlice, nanoid } from "@reduxjs/toolkit";

const alarmsSlice = createSlice({
  name: "alarms",
  initialState: {
    value: [],
  },
  reducers: {
    setAlarms: (state, action) => {
      state.value = action.payload;
    },
    addAlarm: (state, action) => {
      state.value.push(action.payload);
    },
    removeAlarm: (state, action) => {
      const alarmId = action.payload;
      const newAlarms = state.value.filter((a) => a.id !== alarmId);
      state.value = newAlarms;
    },
    toggleDayInAlarm: {
      reducer(state, action) {
        const { alarmId, dayIndex } = action.payload;

        let alarmIndex;
        state.value.forEach((a, i) => {
          if (a.id === alarmId) alarmIndex = i;
        });

        let isSelected = !!state.value[alarmIndex].days[dayIndex];
        state.value[alarmIndex].days[dayIndex] = isSelected ? 0 : 1;
      },
      prepare(alarmId, dayIndex) {
        return {
          payload: {
            id: nanoid(),
            alarmId,
            dayIndex,
          },
        };
      },
    },
    closeAllDays: (state) => {
      state.value.forEach((a) => (a.isCollapsed = 1));
    },
    toggleValue: {
      reducer(state, action) {
        const { alarmId, key } = action.payload;
        const alarmIndex = state.value.findIndex((a) => a.id === alarmId);

        if (alarmIndex < 0) return;

        const value = state.value[alarmIndex][key];
        state.value[alarmIndex][key] = value ? 0 : 1;
      },
      prepare(alarmId, key) {
        return {
          payload: {
            id: nanoid(),
            alarmId,
            key,
          },
        };
      },
    },
    // toggleAlarmActivity: (state, action) => {
    //   const alarmId = action.payload;
    //   let alarmIndex;
    //   state.value.forEach((a, i) => {
    //     if (a.id === alarmId) alarmIndex = i;
    //   });

    //   const isEnabled = state.value[alarmIndex].isEnabled;
    //   state.value[alarmIndex].isEnabled = isEnabled === 0 ? 1 : 0;
    // },
    // toggleCollapseInAlarm: (state, action) => {
    //   const alarmId = action.payload;
    //   const alarmIndex = state.value.findIndex((a) => a.id === alarmId);

    //   const isCollapsed = state.value[alarmIndex].isCollapsed;
    //   state.value[alarmIndex].isCollapsed = !isCollapsed;
    // },
    // toggleCollapseForStylesInAlarm: (state, action) => {
    //   const alarmId = action.payload;
    //   const alarmIndex = state.value.findIndex((a) => a.id === alarmId);

    //   const isCollapsedForStyles = state.value[alarmIndex].isCollapsedForStyles;
    //   state.value[alarmIndex].isCollapsedForStyles = !isCollapsedForStyles;
    // },
    // toggleIsToggleButtonBlocked: (state, action) => {
    //   const alarmId = action.payload;
    //   const alarmIndex = state.value.findIndex((a) => a.id === alarmId);

    //   // fix if alarm removed during button blocked
    //   if (alarmIndex < 0) return;

    //   const isToggleButtonBlocked =
    //     state.value[alarmIndex].isToggleButtonBlocked;
    //   state.value[alarmIndex].isToggleButtonBlocked = !isToggleButtonBlocked;
    // },
  },
});

export const {
  setAlarms,
  addAlarm,
  removeAlarm,
  toggleDayInAlarm,
  toggleAlarmActivity,
  toggleCollapseInAlarm,
  toggleCollapseForStylesInAlarm,
  closeAllDays,
  toggleIsToggleButtonBlocked,
  toggleValue,
} = alarmsSlice.actions;
export default alarmsSlice.reducer;
