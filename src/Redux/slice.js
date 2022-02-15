import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  not: true,
};

const slice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    isShow: (state) => {
      state.not =!state.not;
      // localStorage.setItem("showNotificationTip", JSON.stringify(state.not));
    },
  },
});

export const { isShow } = slice.actions;

export default slice.reducer;
