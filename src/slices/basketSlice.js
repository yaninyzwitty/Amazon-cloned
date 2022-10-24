import { createSlice } from "@reduxjs/toolkit";
// dont use filter get rids of everything
const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
        );
      let newBasket = [...state.items];
      if (index >= 0) {
        // item exists
        // removes the id thus the object
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cnt remove the product {id: ${action.payload.id} is not in  the basket}`
        )
        // item doesnt exist in the basket
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer;
