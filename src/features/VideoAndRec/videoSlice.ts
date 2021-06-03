import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axiosYT from "../../axios/axiosYT";

type videoState = {
  videoId: string | undefined;
  recommendations: AxiosResponse | null;
};

export const getRelated = createAsyncThunk(
  "video/getRelated",
  async (videoId: string) => {
    console.log("Called getRelated");
    const response = axiosYT.get("/search", {
      params: { type: "video", relatedToVideoID: videoId },
    });
    return response;
  }
);

const initialState: videoState = {
  videoId: undefined,
  recommendations: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    selectVideo: (state, action) => {
      state.videoId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRelated.fulfilled, (state, action) => {
      console.log("getRelatedFulfilled");
      state.recommendations = action.payload;
    });
  },
});

export const { selectVideo } = videoSlice.actions;

export default videoSlice.reducer;
