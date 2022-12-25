import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    inforUser: {
        email: '',
        name: '',
        address: '',
        phoneNumber: '',
        purchaseHistory: [],
        role: 0,
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
        updateProfile: (state, action) => {
            state.inforUser.address = action.payload.address
            state.inforUser.phoneNumber = action.payload.phoneNumber
            state.inforUser.name = action.payload.name
        },
    },
})

export const { loginSuccess, logout, updateProfile } = userSlice.actions

export default userSlice.reducer
