import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const savedAdvice = createSlice({
  name: "savedAdvice",
  initialState: [] as string[],
  reducers: {
    addSavedAdvice: (state,action: PayloadAction<string>) => {
      state.push(action.payload);
      return state;
    },
    removeSavedAdvice:(state,action:PayloadAction<number>)=>{
      state.splice(action.payload, 1);
    }
  },
});

export const { addSavedAdvice,removeSavedAdvice } = savedAdvice.actions;
export default savedAdvice.reducer;
