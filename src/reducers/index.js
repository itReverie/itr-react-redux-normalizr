import {combineReducers} from 'redux';
import questions from './questionReducer';
import parts from './partReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  questions,
  parts,
  error
});


export default rootReducer;
