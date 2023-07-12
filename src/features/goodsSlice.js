import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const";

export const fetchGender = createAsyncThunk(
  "goods/fetchGender",
  async (gender) => {
    const url = new URL(GOODS_URL);
    url.searchParams.append("gender", gender);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
export const fetchCategory = createAsyncThunk(
  "goods/fetchCategory",
  async (param) => {
    const url = new URL(GOODS_URL);
    for (const key in param) {
      url.searchParams.append(key, param[key]);
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    status: "idle",
    goodsList: [],
    error: null,
    page: 0,
    pages: 0,
    totalCount: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGender.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGender.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload;
      })
      .addCase(fetchGender.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload.goods;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
