import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartSize: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
        let product = state.cart.find((item)=> item.product_id === payload.product_id) || {...payload, quantity:0};
        product.quantity += 1;
        if(state.cart.find((item)=> item.product_id === product.product_id) === undefined){
            state.cart.push(product);
        }else{
            state.cart = [...state.cart.filter((item)=> item.product_id !== product.product_id), product];
        }

        state.cartSize = state.cart.reduce((acc, item)=> acc + parseInt(item.quantity), 0);
        state.totalPrice = state.cart.reduce((acc, item)=> acc + (item.discounted_price ? parseFloat(item.discounted_price.substring(1).replace(",", "")) : parseFloat(item.price.substring(1).replace(",", "")) * item.quantity), 0);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, {payload}) => {
        let updatedCart;
        let product = state.cart.find((item)=> item.product_id === payload.product_id);
        if(product.quantity > 1){
            updatedCart = state.cart.map((item)=> item.product_id === product.product_id ? {...item, quantity: item.quantity - 1} : item);
        } else {
            updatedCart = state.cart.filter((item)=> item.product_id !== product.product_id);
        }
        state.cart = updatedCart;
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
