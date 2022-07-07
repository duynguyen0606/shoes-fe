import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogin: false,
    inforUser: {
        email: '',
        name: '',
        address: '',
        phone: '',
        purchaseHistory: [],
    }
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true;
            state.inforUser = action.payload;
        },
        logout: (state, action) => {
            state.isLogin = false;
            state.inforUser = {};
        },
    }
})

export const  { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;