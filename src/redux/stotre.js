import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneReducer from './reducer';

const rootReducer = combineReducers({
  contacts: phoneReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
