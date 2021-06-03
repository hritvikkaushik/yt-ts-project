import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from '../features/Counter/counterSlice';
import searchBoxReducer from "../features/SearchBox/searchBoxSlice";
import videoReducer from "../features/VideoAndRec/videoSlice";

export const store = configureStore({
  reducer: {
    searchBox: searchBoxReducer,
    video: videoReducer,
    // counter: counterReducer,
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
