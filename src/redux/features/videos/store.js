import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videosSlice";
export const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});
