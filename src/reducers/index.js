import { combineReducers } from 'redux-immutable';
import questions from './questionReducer';

const rootReducer = combineReducers({
  questions
});


export default rootReducer;
