import axios from "axios"

export const apiLogin = async (data) => {
    return await axios.post('http://localhost:8000/login', data)
}
export const apiRegister = async (data) => {
    return await axios.post('http://localhost:8000/register', data)
}
export const apiSignup = async (data) => {
    return await axios.post('', data);
}
export const apiLogout = async (data) => {
    return await axios.post('', data);
}
export const apiCheckLogin = async () => {
    return await axios.post('http://localhost:8000/user/checkLogin',{}, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
}
export const getAllAccounts = async () => {
    return await axios.get('http://localhost:8000/user/list', {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
}