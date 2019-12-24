import { createStore, combineReducers, applyMiddleware } from "redux";

import { article } from "../_reducers/article";

import { logger } from '../middleware';

//Get All reducers available
//Global State come from here
const reducers = combineReducers({
  article
});

//Setup Store Redux
const store = createStore(reducers, applyMiddleware(logger));

export default store;