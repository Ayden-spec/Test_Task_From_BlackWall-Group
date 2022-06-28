import axios from 'axios'
import { Reducer_Set_Questions } from '../reducers/questionsReducer'

let domain = 'https://api.stackexchange.com';
let KEY = 'pDrW8Ztwd4m2)AbD8Yw7nw(('

export const GetQuestion = async (question) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${domain}/search/advanced?key=${KEY}&order=desc&sort=activity&q=${question}&filter=withbody&site=stackoverflow`)
            console.log(response.data)
            dispatch(Reducer_Set_Questions(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const GetTopTags = async (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${domain}/user/${id}/top-tags`)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }
}

export const GetTopTagsAndQuestions = async (id, tags) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${domain}/user/${id}/${tags}/top-tags/top-questions`)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }
}