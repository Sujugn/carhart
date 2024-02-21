import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import counter from '../modules/counter';

const rootReducer = combineReducers({
    counter, //추가 reducer
});
const store = configureStore({
    reducer: rootReducer,
});

export default store;
