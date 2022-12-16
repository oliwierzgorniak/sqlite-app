import { createSlice } from "@reduxjs/toolkit";
import get2DigitString from "../../js/get2DigitString";

const timeSelectionSlice = createSlice({
  name: "timeSeclection",
  initialState: {
    value: {
      hours: "00",
      minutes: "00",
      isMinutesFirstClick: true,
      lastClickedValue: null,
      isHoursMode: true,
    },
  },
  reducers: {
    setHours: (state, action) => {
      const hours = action.payload;
      state.value.hours = get2DigitString(hours);
    },
    setMinutes: (state, action) => {
      const minutes = action.payload;
      state.value.minutes = get2DigitString(minutes);
    },
    incrementMinutes: (state) => {
      const minutesNumber = Number(state.value.minutes);
      const mIncremented = minutesNumber + 1;
      if (mIncremented >= 60) return;
      const mString = String(mIncremented);
      state.value.minutes = get2DigitString(mString);
    },
    handleFirstClick: (state, action) => {
      const lastClickedValue = action.payload;
      state.value.isMinutesFirstClick = false;
      state.value.lastClickedValue = lastClickedValue;
      state.value.minutes = get2DigitString(lastClickedValue);
    },
    setIsMinutesFirstClick: (state, action) => {
      const isMinutesFirstClick = action.payload;
      state.value.isMinutesFirstClick = isMinutesFirstClick;
    },
    setIsHoursMode: (state, action) => {
      const isHoursMode = action.payload;
      state.value.isHoursMode = isHoursMode;
    },
    setLastClickedValue: (state, action) => {
      const lastClickedValue = action.payload;
      state.value.lastClickedValue = lastClickedValue;
    },
  },
});

export const {
  setHours,
  setMinutes,
  incrementMinutes,
  handleFirstClick,
  setIsMinutesFirstClick,
  setIsHoursMode,
  setLastClickedValue,
} = timeSelectionSlice.actions;
export default timeSelectionSlice.reducer;
