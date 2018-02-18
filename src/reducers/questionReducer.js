import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { List, Map } from 'immutable';
import Immutable from 'immutable';


export default function questionReducer(state = Map({}), action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
     console.log('ACTION:',action);
      //let Idontknow=state.merge(action.questions);
      let Idontknow=Map(action.questions);
      console.log('newState:',Idontknow);
      return Idontknow;
    case types.LOAD_QUESTIONS_ERROR:
      return action.questions;

    default:
      return state;
  }
}
