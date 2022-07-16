import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import productsReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import voucherReducer from '../features/voucher/voucherSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        cart: cartReducer,
        vouchers: voucherReducer,
    },
})
