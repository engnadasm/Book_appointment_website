import {combineReducers } from 'redux';
import itemReducer from './itemReducer';
import requestReducer from './requestReducer';

export default combineReducers({
  item: itemReducer,
  requestReducer:requestReducer
});
