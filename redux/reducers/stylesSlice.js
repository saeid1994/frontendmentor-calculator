import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    theme: "theme-dark",
  },
};

export const stylesSlice = createSlice({
  name: "styles",
  initialState,

  reducers: {
    darkTheme: (state) => {
      state.value.theme = "theme-dark";
    },
    lightTheme: (state) => {
      state.value.theme = "theme-light";
    },
    purpleTheme: (state) => {
      state.value.theme = "theme-purple";
    },
  },
});

// Action creators are generated for each case reducer function
export const { darkTheme, lightTheme, purpleTheme } = stylesSlice.actions;

export default stylesSlice.reducer;
