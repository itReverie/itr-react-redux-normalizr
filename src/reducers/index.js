import {combineReducers} from 'redux';
import questions from './questionReducer';
import parts from './partReducer';
import text from './textReducer';
import suggestions from './suggestionReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  questions,
  parts,
  text,
  suggestions,
  error
});


export default rootReducer;
