import { combineReducers } from 'redux-immutable';
import questions from './questionReducer';
import parts from './partReducer';

const rootReducer = combineReducers({
  questions,
  parts
});


export default rootReducer;
