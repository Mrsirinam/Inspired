import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CATEGORY_URL } from "../const";

export const fetchNavigation = createAsyncThunk(
  "navigation/fetchNavigation",
  async () => {
    const response = await fetch(CATEGORY_URL);
    const data = await response.json();
    return data;
  }
);

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    activeGender: "women",
    status: "idle",
    categories: {},
    genderList: [],
  },
  reducers: {
    setActiveGender: (state, action) => {
      state.activeGender = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavigation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNavigation.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = action.payload;
        state.genderList = Object.keys(action.payload);
      });
    // .addCase();
  },
});

export const { setActiveGender } = navigationSlice.actions;

export default navigationSlice.reducer;
