import axios from 'axios'
import { Reducer_Set_Questions } from '../reducers/Reducer'

let link = 'https://api.stackexchange.com';
let KEY = 'pDrW8Ztwd4m2)AbD8Yw7nw(('

export const GetQuestion = (question) => async (dispatch) => {
    try {
        const response = await axios.get(`${link}/search/advanced?key=${KEY}&order=desc&sort=activity&q=${question}&filter=withbody&site=stackoverflow`)
        console.log(response.data)
        dispatch(Reducer_Set_Questions(response.data.items))
    } catch (e) {
        console.log(e)
    }
}


export const GetTopTags = (id) => async dispatch => {
    try {
        const response = await axios.get(`${link}/user/${id}/top-tags`)
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}

export const GetTopTagsAndQuestions = (id, tags) => async dispatch => {
    try {
        const response = await axios.get(`${link}/user/${id}/${tags}/top-tags/top-questions`)
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}