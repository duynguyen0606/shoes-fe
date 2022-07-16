import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    vouchers: [{ discount: 0, condition: 0 }],
}

const voucherSlice = createSlice({
    name: 'voucher',
    initialState,
    reducers: {
        setVoucher: (state, action) => {
            state.vouchers = action.payload
        },
        addVoucher: (state, action) => {
            state.vouchers = [...state.vouchers, action.payload]
        },
        deleteVoucher: (state, action) => {
            state.vouchers = state.vouchers.filter((voucher) => voucher._id !== action.payload._id)
        },
        updateVoucher: (state, action) => {
            state.vouchers = state.vouchers.map((voucher) => {
                if (voucher._id === action.payload._id) {
                    voucher = action.payload
                    return voucher
                } else {
                    return voucher
                }
            })
        },
    },
})
export const { setVoucher, addVoucher, deleteVoucher, updateVoucher } = voucherSlice.actions
export default voucherSlice.reducer
