import axios from "axios"

export const getListVoucherApi = async () => {
    return await axios.get('http://localhost:8000/voucher/list');
}
export const addNewVoucherApi = async (reqBody) => {
    return await axios.post('http://localhost:8000/voucher/create-voucher', reqBody, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    } )
}
export const deleteVoucherApi = async (reqBody) => {
    return await axios.post('http://localhost:8000/voucher/delete', reqBody, {
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    } )
}