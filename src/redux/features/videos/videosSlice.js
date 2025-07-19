import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

// declaring the initialState

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// declaring the async thunk

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async ({tags, search}) => {
  const videos = await getVideos(tags, search);
  return videos;
});

// declaring the reducer

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
