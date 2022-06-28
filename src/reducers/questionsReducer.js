const REDUCER_SET_QUESTIONS = 'REDUCER_SET_QUESTIONS'


const defaultstate = {
    questions: [],
}

export default function userReducers(state = defaultstate, action) {
    switch (action.type) {
        case REDUCER_SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
            }

        default: return state;
    }
}

export const Reducer_Set_Questions = question => ({ type: REDUCER_SET_QUESTIONS, payload: question })