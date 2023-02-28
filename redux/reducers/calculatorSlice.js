import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    no: "",
  },
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,

  reducers: {
    calculate: (state, payload) => {
      state.value.no = payload.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculate } = calculatorSlice.actions;

export default calculatorSlice.reducer;
