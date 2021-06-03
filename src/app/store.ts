import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchReducer from "../features/SearchBox/searchSlice";
import videoReducer from "../features/VideoAndRec/videoSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    video: videoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
