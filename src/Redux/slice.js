import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  not: true,
  messanger: true,
  chats: [],
  chatsone: [],
  chatstwo: [],
  seeone: true,
  setttow: true,
  seethre: true,
  levi: false,
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
    addChattwo: (state, action) => {
      state.chatsone.push(action.payload);
    },
    addChatthree: (state, action) => {
      state.chatstwo.push(action.payload);
    },
    seemassage: (state) => {
      state.seeone = false;
    },
    messagetwo: (state) => {
      state.setttow = false;
    },
    messageseethre: (state) => {
      state.seethre = false;
    },
  },
});

export const {
  isShowNotification,
  isShowmessanger,
  addChat,
  seemassage,
  messagetwo,
  messageseethre,
  addChattwo,
  addChatthree,
} = slice.actions;

export default slice.reducer;
