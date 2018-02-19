import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { List, Map , fromJS} from 'immutable';
import Immutable from 'immutable';


export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      console.log('REDUCER questions original state:',state);
      console.log('REDUCER questions action:',action.payload);
      let newState=state.mergeDeep(action.payload);
      console.log('REDUCER questions new state:',newState);
      return newState;
    case types.LOAD_QUESTIONS_ERROR:
      return action.questions;

    default:
      return state;
  }
}
