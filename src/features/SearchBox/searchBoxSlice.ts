import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axiosYT from "../../axios/axiosYT";
// import { RootState } from "../../app/store";

export interface SearchBoxState {
  reducedWidth: boolean;
  atTop: boolean;
  status: "idle" | "loading" | "failed";
  open: boolean;
  query?: string | null;
  response?: AxiosResponse | null;
}

const initialState: SearchBoxState = {
  reducedWidth: false,
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
    const response = axiosYT.get("/search", { params: { q: query } });
    // console.log(response);
    //Value returned here becomes 'fulfilled' action payload
    return response;
  }
);

export const searchBoxSlice = createSlice({
  name: "searchBox",
  initialState,
  reducers: {
    reduceWidth: (state) => {
      console.log("reducewidth");
      state.reducedWidth = true;
    },
    extendWidth: (state) => {
      console.log("extendwidth");
      state.reducedWidth = false;
    },
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
        // console.log(action);
      });
  },
});

export const {
  reduceWidth,
  extendWidth,
  moveToCenter,
  moveToTop,
  closeResults,
} = searchBoxSlice.actions;

export default searchBoxSlice.reducer;
