import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [

    ]
}

const storeLocal = (cart) => {
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.products = action.payload;
        },
        addProductToCart: (state, action) => {
            state.products = [
                ...state.products,
                action.payload
            ];
            storeLocal(state);
        },
        deleteProductInCart: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload._id);
            storeLocal(state);
        },
        updateCart: (state, action) => {
            state.products = state.products.map(product => {
                if (product._id === action.payload._id) {
                    product.amount = product.amount + action.payload.amount;
                    return product;
                } else {
                    return product;
                }
            })
            storeLocal(state);
        }
    }
})
export const { setCart, addProductToCart, deleteProductInCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
