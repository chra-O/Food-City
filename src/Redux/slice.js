import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  not: true,
  messanger: true,
  chats: [],
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
    addChat: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const { isShowNotification, isShowmessanger  ,addChat} = slice.actions;

export default slice.reducer;
