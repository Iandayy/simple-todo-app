import { createSlice } from "@reduxjs/toolkit";

const initialValidState = {
  value: { title: "", date: "" },
  isTouched: false,
};

const validSlice = createSlice({
  name: "valid",
  initialState: initialValidState,
  reducers: {
    input(state, action) {
      state.value.title = action.payload.title;
      state.value.date = action.payload.date;
    },
    blur(state) {
      state.isTouched = true;
    },
    reset(state) {
      state.value.title = "";
      state.value.date = "";
    },
  },
});

export const validActions = validSlice.actions;

export default validSlice.reducer;
