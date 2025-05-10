import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedAdvice = createSlice({
  name: "advice",
  initialState: [] as string[],
  reducers: {
    addSavedAdvice: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
      return state;
    },
    removeSavedAdvice: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addSavedAdvice, removeSavedAdvice } = savedAdvice.actions;
export default savedAdvice.reducer;
