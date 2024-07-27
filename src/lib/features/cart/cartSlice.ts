import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export interface CartState {
  items: ItemType[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ItemType>) => {
      state.items.push(action.payload);
    },
    increItemToCart: (state, action: PayloadAction<ItemType>) => {
      const index = state.items.findIndex((it) => it.id === action.payload.id);
      state.items[index] = action.payload;
    },
    decreItemToCart: (state, action: PayloadAction<ItemType>) => {
      const index = state.items.findIndex((it) => it.id === action.payload.id);
      state.items[index] = action.payload;
    },
    deleteItemToCart: (state, action: PayloadAction<ItemType>) => {
      const index = state.items.filter((it) => it.id !== action.payload.id);
      state.items = index;
    },
  },
});

export const {
  addItemToCart,
  increItemToCart,
  decreItemToCart,
  deleteItemToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
