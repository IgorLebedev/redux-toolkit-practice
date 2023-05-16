import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import todoSlice from "./todoSlice";
import postsSlice from "./postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    posts: postsSlice,
  },
})