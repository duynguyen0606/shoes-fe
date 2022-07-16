import axios from 'axios'

export const getAllFeedbackByProApi = async (reqBody) => {
    return await axios.post('http://localhost:8000/comments', reqBody)
}
export const createNewFeedbackApi = async (reqBody) => {
    return await axios.post('http://localhost:8000/comment/post', reqBody)
}
