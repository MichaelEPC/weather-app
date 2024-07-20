import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice";
import { searchHistorySlice } from "./historySearchSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    history: searchHistorySlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
