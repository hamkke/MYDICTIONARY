import {createStore, combineReducers} from 'redux';
// 미들웨어 연결하기 위해 필요
import { applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";

import Card from './modules/Card';

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({Card});

const store = createStore(rootReducer, enhancer);

export default store;