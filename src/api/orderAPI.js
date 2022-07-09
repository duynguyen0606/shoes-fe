import axios from "axios"

export const getListOrderByAdmin = async () => {
    return await axios.get('http://localhost:8000/order/list', {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
}
export const updateStatusOrderApi = async (reqBody) => {
    return await axios.post('http://localhost:8000/order/update',reqBody, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
}
export const apiCreateOrder = async (data) => {
    return await axios.post('', data);
}
export const apiDeleteProduct = async (data) => {
    return await axios.post('', data);
}
