import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "Canon Realis SX60 Multimedia Projector",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "Background Speaker – Homecare24 ",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: " Black Dynamic Microphone on Pexels",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "Bi-Office Double Sided Magnetic Whiteboard",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: " Building Signage – Signs West Outdoor ",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;