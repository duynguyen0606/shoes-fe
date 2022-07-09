import axios from "axios"

export const apiLoadAllProduct = async () => {
    return await axios.get('http://localhost:8000/product/list')
}
export const apiAddProduct = async (data) => {
    return await axios.post('http://localhost:8000/product/create-product', data, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
}
export const apiUpdateProduct = async (reqBody) => {
    return await axios.post('http://localhost:8000/product/update-product', reqBody, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
}
export const apiDeleteProduct = async (reqBody) => {
    return await axios.post('http://localhost:8000/product/delete-product', reqBody, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
}