import { combineReducers } from "@reduxjs/toolkit";
import navigation from "./features/navigationSlice.js";
import color from "./features/colorSlice.js";
import goods from "./features/goodsSlice.js";
import product from "./features/productSlice.js";
import favorites from "./features/favoritesSlice.js";
import cart from "./features/cartSlice.js";
import search from "./features/searchSlice.js";
import statusServer from "./features/statusServerSlice.js";

export const rootReducer = combineReducers({
  navigation,
  color,
  goods,
  product,
  favorites,
  cart,
  search,
  statusServer,
});
