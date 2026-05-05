import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
};

type CartItemsState = {
  cartItems: CartItem[];
};

const initialState: CartItemsState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<CartItem[]>) {
      state.cartItems = action.payload;
    },

    addCartItem(state, action: PayloadAction<CartItem>) {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeCartItem(state, action: PayloadAction<string>) {
      console.log("Removing item with ID:", action.payload);
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload,
      );
    },

    updateCartItemQuantity(
      state,
      action: PayloadAction<{ _id: string; quantity: number }>,
    ) {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    clearCartItems(state) {
      state.cartItems = [];
    },
  },
});

export const {
  setCartItems,
  addCartItem,
  removeCartItem,
  updateCartItemQuantity,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
