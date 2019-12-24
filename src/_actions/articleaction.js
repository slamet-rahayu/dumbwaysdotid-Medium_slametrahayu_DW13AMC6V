import { GET_ARTICLE, GET_ARTICLE_PENDING } from '../src/config/constant'
import axios from 'axios'

export const getArticle = user => {
    return {
        type: GET_ARTICLE,
        payload: user
    }
}

export const getArticlePending = article => {
    return {
        type: GET_ARTICLE_PENDING,
    }
}