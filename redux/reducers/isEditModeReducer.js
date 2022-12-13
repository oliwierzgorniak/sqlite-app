import { createSlice } from "@reduxjs/toolkit";

const isEditModeSlice = createSlice({
  name: "isEditMode",
  initialState: {
    value: false,
  },
  reducers: {
    toggleIsEditMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleIsEditMode } = isEditModeSlice.actions;
export default isEditModeSlice.reducer;
