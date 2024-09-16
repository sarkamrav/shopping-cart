import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../styles/types';

// Define CartItem which extends Product and adds the quantity
interface CartItem extends Product {
  quantity: number;
}

// Define the initial state type
export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

// Define the initial state
export const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        const priceDifference = (quantity - item.quantity) * item.price;
        state.totalPrice += priceDifference;
        item.quantity = quantity;
      }
    },
  },
});


export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
