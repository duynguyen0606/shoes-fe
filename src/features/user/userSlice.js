import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: true,
    inforUser: {
        email: 'tangdatsdbg@gmail.com',
        name: 'Dat Manh',
        address: 'Ha Noi',
        phone: '0348513413',
        purchaseHistory: [],
    },
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true
            state.inforUser = action.payload
        },
        logout: (state, action) => {
            state.isLogin = false
            state.inforUser = {}
        },
    },
})

export const { loginSuccess, logout } = userSlice.actions

export default userSlice.reducer
