import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    openSearch: false,
  },
  reducers: {
    toggleSearch(state) {
      state.openSearch = !state.openSearch;
    },
  },
});

export const { toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
