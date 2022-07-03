import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        setCart: (state, action) => {
            state.products = action.payload;
        },
        addProductToCart: (state, action) => {
            state.products = [
                ...state.products,
                action.payload
            ];
        },
        deleteProductInCart: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload._id);
        },
        updateCart: (state, action) => {
            state.products = state.products.map(product => {
                if(product._id === action.payload._id){
                    product.amount = product.amount + action.payload.amount;
                    return product;
                }else{
                    return product;
                }
            })
        }
    }
})
export const { setCart, addProductToCart, deleteProductInCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;