import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ORDER_URL } from "../const.js";

const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

export const sendOrder = createAsyncThunk("cart/sendOrder", async (data) => {
  const url = new URL(ORDER_URL);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems,
    countItems: cartItems.length,
    orderStatus: "idle",
    order: {},
    error: null,
  },
  reducers: {
    addToCart(state, action) {
      const { id, color, size, count } = action.payload;
      const item = state.cartItems.find(
        (item) => item.id === id && item.color === color && item.size === size
      );
      if (item) {
        item.count = count;
      } else {
        state.cartItems.push({ id, color, size, count });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
    },

    removeFromCart(state, action) {
      const { id, color, size } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.color === color && item.size === size
      );

      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
    },
    clearCart(state) {
      state.cartItems = [];

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
      state.orderStatus = "idle";
      state.order = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.orderStatus = "loading";
        state.order = {};
        state.error = null;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.orderStatus = "success";
        state.order = action.payload;
        state.error = null;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.order = {};
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
