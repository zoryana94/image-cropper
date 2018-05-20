import { combineReducers, compose, createStore } from 'redux';
import * as Reducers from './reducer';

const mainReducer = combineReducers(Reducers);

export default createStore(mainReducer);
