import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.products = [
                ...state.products,
                action.payload
            ];
        },
        updateProduct: (state, action) => {
            state.products = state.products.map((product) => {
                if(product._id === action.payload._id){
                    product = action.payload;
                    return product;
                }else{
                    return product;
                }
            })
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) =>{
                return product._id !== action.payload._id;
            })
        }
    }
})
export const { addProduct, updateProduct, deleteProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
