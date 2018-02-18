import { combineReducers } from 'redux-immutable';
import questions from './questionReducer';
import parts from './partsReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  questions,
  parts,
  error
});


export default rootReducer;
