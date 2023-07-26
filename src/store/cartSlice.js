import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [
        { name: "Rose", price: 129},
        { name: "Daffodils", price:160},
        { name: "lily", price:109},
        { name: "sunflower", price:80},
    ],
    cart:[],
    total:0,
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart : (state,action)=>{
            state.cart =[...state.cart,action.payload];
            state.total = state.total + action.payload.price;
        },
        removeFromCart : (state,action)=>{
            state.cart =state.cart.filter((i,index)=>index !== action.payload.index);
            state.total = state.total - action.payload.price;
        },
    },
});
export const {addToCart,removeFromCart} = cartSlice.actions;  
export default cartSlice.reducer;