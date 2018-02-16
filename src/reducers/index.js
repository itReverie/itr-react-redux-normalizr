import {combineReducers} from 'redux';
import questions from './questionReducer';
import parts from './partsReducer';
import part from './partReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  questions,
  parts,
  part,
  error
});


export default rootReducer;
