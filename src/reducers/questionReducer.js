import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { List, Map } from 'immutable';
import Immutable from 'immutable';


export default function questionReducer(state = Map({}), action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      let questions=Map(action.questions);
      console.log('newState:',questions);
      return questions;
    case types.LOAD_QUESTIONS_ERROR:
      return action.questions;

    default:
      return state;
  }
}
