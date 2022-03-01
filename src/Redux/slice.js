import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  not: true,
  messanger: true,
  chats: [],
  see: true,
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
    seemassage: (state, action) => {
      state.see = false;
    },
  },
});

export const { isShowNotification, isShowmessanger, addChat, seemassage } =
  slice.actions;

export default slice.reducer;
