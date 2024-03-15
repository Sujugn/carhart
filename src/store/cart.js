import { createSlice } from '@reduxjs/toolkit';

export const cartItem = createSlice({
    name: 'cart',
    initialState: [],
    reducer: {
        addCart(state, action) {},

        minusCart(state, action) {},

        delectCart(state, action) {},
    },
});

export const { addCart, minusCart, delectCart } = cartItem.actions;
export default cartItem;
