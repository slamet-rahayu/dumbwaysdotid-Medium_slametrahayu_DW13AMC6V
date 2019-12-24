import { GET_ARTICLE, GET_ARTICLE_PENDING } from '../src/config/constant'

const initialState = {
    data: [],
    isLoading: false
}

export const article = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLE:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case GET_ARTICLE_PENDING:
            return {
                ...state,
                isLoading: true
            }
        default: return state;
    }
}