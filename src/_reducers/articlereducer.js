import { GET_ARTICLE,
     GET_ARTICLE_PENDING,
     GET_LATEST_ARTICLE,
     GET_CATEGORY_DETAIL,
     GET_CATEGORY_DETAILL,
     GET_ARTICLE_DETAIL,
     REGISTER_USER
     } from '../config/constants'

const initialState = {
    data: [],
    latestdata: [],
    catdetail: [],
    catdetaill: [],
    articledetail: [],
    user: [],
    isLoading: false,
    isPost: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLE:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case GET_ARTICLE_DETAIL:
            return {
                ...state,
                articledetail: action.payload,
                isLoading: false
            }
        case GET_LATEST_ARTICLE:
            return {
                ...state,
                latestdata: action.payload,
                isLoading: false
            }
        case GET_CATEGORY_DETAIL:
            return {
                ...state,
                catdetail: action.payload,
                isLoading: false
            }
        case GET_CATEGORY_DETAILL:
            return {
                ...state,
                catdetaill: action.payload,
                isLoading: false
            }
        case REGISTER_USER:
            return {
                ...state,
                user: state.user.concat([action.payload]),
                isLoading: false,
                isPost: false
            }
        case GET_ARTICLE_PENDING:
            return {
                ...state
            }
        default: return state;
    }
}