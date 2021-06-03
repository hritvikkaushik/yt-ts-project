import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axiosYT from "../../axios/axiosYT";

export interface SearchBoxState {
  atTop: boolean;
  status: "idle" | "loading" | "failed";
  open: boolean;
  query?: string | null;
  response?: AxiosResponse | null;
}

const initialState: SearchBoxState = {
  atTop: false,
  status: "idle",
  query: null,
  response: null,
  open: false,
};

export const getSearchResults = createAsyncThunk(
  "search/getSearchResults",
  async (query: string) => {
    query.replace(" ", "+");
    // const response = await fakeAPICall(query);
    const response = axiosYT.get("/search", {
      params: { q: query, type: "video", maxResults: 10 },
    });
    return response;
  }
);

export const searchBoxSlice = createSlice({
  name: "searchBox",
  initialState,
  reducers: {
    moveToTop: (state) => {
      console.log("movetotop");
      state.atTop = true;
    },
    moveToCenter: (state) => {
      console.log("movetocenter");
      state.atTop = false;
    },
    closeResults: (state) => {
      console.log("closeResults");
      state.open = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.status = "idle";
        state.open = true;
        state.response = action.payload;
      });
  },
});

export const { moveToCenter, moveToTop, closeResults } = searchBoxSlice.actions;

export default searchBoxSlice.reducer;
