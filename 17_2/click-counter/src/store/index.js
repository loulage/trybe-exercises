import { createStore, combineReducers } from 'redux';
import { clickReducer } from '../reducers/clickReducer';

const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;