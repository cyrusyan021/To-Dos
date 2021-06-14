import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { todoReducer } from './todo/reducer';

const persistConfig = {
  key: 'react__to-do__demo',
  storage,
  whitelist: ['todo']
};

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default persistReducer(persistConfig, rootReducer);
