import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "./fecthClimate";

interface paremetersApi {
  lat: number;
  lon: number;
}

export const searchCityClimate = createAsyncThunk(
  "data/fetchData",
  async ({ lat, lon }: paremetersApi) => {
    const facts = await fetchData(lat, lon);
    return facts;
  },
);

interface InitialStateProps {
  data: [];
  loading: boolean;
}

const initialState: InitialStateProps = { data: [], loading: false };

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        searchCityClimate.fulfilled,
        // @ts-expect-ignore
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(searchCityClimate.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchCityClimate.rejected, (state) => {
        state.loading = false;
      });
  },
});
