import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slice";

 const store =configureStore({
  reducer: {
    notify: Slice,
  },
});
export default store