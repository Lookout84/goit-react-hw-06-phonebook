import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneReducer from './reducer';

const initialState = {};

const reducer = (state = {}, action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
