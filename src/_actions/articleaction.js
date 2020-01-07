import { GET_ARTICLE, 
         GET_ARTICLE_PENDING,
         GET_LATEST_ARTICLE,
         GET_CATEGORY_DETAIL,
         GET_CATEGORY_DETAILL,
         GET_ARTICLE_DETAIL,
         REGISTER_USER
         } from '../config/constants'
import axios from 'axios'

export const getArticle = () => {
        return(dispatch) => {
           return axios.get('https://medium-express.herokuapp.com/api/v1/home')
            .then(articles => {
            dispatch({
                    type: GET_ARTICLE,
                    payload: articles.data
                })
            })
        }
}

export function getCategoryDetail(id){
    return(dispatch) => {
       return axios.get('https://medium-express.herokuapp.com/api/v1/article/'+id)
        .then(catdetail => {
        dispatch({
                type: GET_CATEGORY_DETAIL,
                payload: catdetail.data
            })
        })
    }
}

export function getArticleDetail(id){
    return(dispatch) => {
       return axios.get('https://medium-express.herokuapp.com/api/v1/detail/'+id)
        .then(res => {
        dispatch({
                type: GET_ARTICLE_DETAIL,
                payload: res.data
            })
        })
    }
}


export function getCategoryDetaill(id){
    return(dispatch) => {
       return axios.get('https://medium-express.herokuapp.com/api/v1/article/'+id)
        .then(catdetail => {
        dispatch({
                type: GET_CATEGORY_DETAILL,
                payload: catdetail.data.articles
            })
        })
    }
}

export const Register = (datas) => {
    return(dispatch) => {
        return axios.post('https://medium-express.herokuapp.com/api/v1/register', datas)
        .then(reg=> {
            dispatch(RegisterPost(reg.data))
        })
        .catch(err=>{
            throw(err)
        })
    }
}

export const RegisterPost = (data) =>{
    return {
        type: REGISTER_USER,
        payload: data
    }
}

export const latestArticle = () => {
    return(dispatch) => {
       return axios.get('https://medium-express.herokuapp.com/api/v1/late')
        .then(latest => {
        dispatch({
                type: GET_LATEST_ARTICLE,
                payload: latest.data
            })
        })
    }
}

export const getArticlePending = () => {
    return(dispatch) => {
        dispatch({
            type: GET_ARTICLE_PENDING,
            isLoading: true
        })
    }
}