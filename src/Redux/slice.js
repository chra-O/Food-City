import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  not: true,
  messanger: true,
  usernames: '',
  password: '',
  chats: [],
  chatsone: [],
  chatstwo: [],
  seeone: true,
  setttow: true,
  seethre: true,
  levi: false,
  user2: "",
  user: [],
  user1: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcN2P5YcOKn24rv1071WX1cQujWc1BXQRRcw&usqp=CAU",
      name: "Laia",
      username: " Laila.i.o",
      descrption: "life and smile",
      post: "6",
      follower: "126",
      following: "2986",
      hashtag: "#baby#babygril#honey",
    },
    {
      img: "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
      name: "Chapka",
      username: "CHapa-20",
      descrption: "life and smile",
      post: "6",
      follower: "126",
      following: "2986",
      hashtag: "#baby#babygril#honey",
    },
    {
      img: "https://wallpaperaccess.com/full/1359011.jpg",
      name: "Zhako.othman",
      username: "zh-562-hsb",
      descrption: "life and smile",
      post: "6",
      follower: "126",
      following: "2986",
      hashtag: "#baby#babygril#honey",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: "shyryn-fatah",
      username: "shyryny-fatahhh",
      descrption: "life and smile",
      post: "6",
      follower: "126",
      following: "2986",
      hashtag: "#baby#babygril#honey",
    },
    {
      img: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/01/326738_2200-732x549.jpg",
      name: "jwan",
      username: "jwana.muhmwd",
      descrption: "life and smile",
      post: "6",
      follower: "126",
      following: "2986",
      hashtag: "#baby#babygril#honey",
    },
  ],
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
    username: (state, action) => {
      state.user.push(action.payload);
    },
    deletuser: (state) => {
      state.user.splice(0, 1);
    },
    deleteuserwithindex: (state, action) => {
      state.user1.splice(action.payload, 1);
    },
    clearAll: (state) => {
      state.user1 = [];
    },
    searchfliter: (state, action) => {
      state.user2 = action.payload;
    },
    setusername:(state ,action) =>{
   
     state.usernames=action.payload
   
    },
    setpassword:(state ,action) =>{
      state.password = action.payload
     }
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
  username,
  deletuser,
  deleteuserwithindex,
  clearAll,
  searchfliter,
  setpassword,
  setusername,
} = slice.actions;

export default slice.reducer;
