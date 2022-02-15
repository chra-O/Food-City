import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  not: true,
  messanger: true,
};

const slice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    isShowNotification: (state) => {
      state.not = false;
    },
    isShowmessanger: (state) => {
      state.messanger = false;
    },
  },
});

export const { isShowNotification, isShowmessanger } = slice.actions;

export default slice.reducer;
