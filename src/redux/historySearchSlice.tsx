import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHistory } from "./fetchHistory";

export const searchHistory = createAsyncThunk(
  "history/fetchHistory",
  async () => {
    const searchHistory = await fetchHistory();
    return searchHistory;
  },
);

interface InitialStateProps {
  searchHistory: [];
}

const initialState: InitialStateProps = { searchHistory: [] };

export const searchHistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchHistory.fulfilled, (state, action) => {
      state.searchHistory = action.payload;
    });
  },
});
