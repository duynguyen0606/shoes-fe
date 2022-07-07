import axios from "axios"

export const apiLoadAllProduct = async () => {
    return await axios.get('http://localhost:8000/product/list')
}
export const apiAddProduct = async (data) => {
    return await axios.post('', data)
}
export const apiUpdateProduct = async (data) => {
    return await axios.post('',data);
}
export const apiDeleteProduct = async (data) => {
    return await axios.post('', data);
}