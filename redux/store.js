import { configureStore } from "@reduxjs/toolkit";
import stylesReducer from "./reducers/stylesSlice";
import calculateReducer from "./reducers/calculatorSlice";

export const store = configureStore({
  reducer: {
    styles: stylesReducer,
    calculator: calculateReducer,
  },
});
