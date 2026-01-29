import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Video = {
  _id: string;
  title: string;
  thumbnail: string;
  duration?: number;
};

type VideosState = {
  videos: Video[];
};

const initialState: VideosState = {
  videos: [],
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideos(state, action: PayloadAction<Video[]>) {
      state.videos = action.payload;
    },

    clearVideos(state) {
      state.videos = [];
    },
  },
});

export const { setVideos, clearVideos } = videosSlice.actions;
export default videosSlice.reducer;
