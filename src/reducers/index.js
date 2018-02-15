import {combineReducers} from 'redux';
import questions from './questionReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  questions,
  error
});


export default rootReducer;
