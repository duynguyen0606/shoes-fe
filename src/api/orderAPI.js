import axios from 'axios'

export const getListOrderByAdmin = async () => {
    return await axios.get('http://localhost:8000/order/list', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    })
}
export const updateStatusOrderApi = async (reqBody) => {
    return await axios.post('http://localhost:8000/order/update', reqBody, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    })
}
export const apiCreateOrder = async (resBody) => {
    return await axios.post('http://localhost:8000/order/create-order', resBody, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    })
}
export const apiDeleteProduct = async (resBody) => {
    return await axios.post('http://localhost:8000/order/update', resBody, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    })
}
