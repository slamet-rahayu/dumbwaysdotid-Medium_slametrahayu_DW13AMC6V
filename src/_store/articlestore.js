import { createStore, combineReducers, applyMiddleware } from "redux";

import  articles from "../_reducers/articlereducer";

import { logger } from '../middleware';

import thunkMiddleware from 'redux-thunk';

//Get All reducers available
//Global State come from here
const reducers = combineReducers({
  articles
});

//Setup Store Redux
const store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));

export default store;