import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function textReducer(state = initialState.text, action) {
  switch (action.type) {
    case types.UPDATE_TEXT_SUCCESS:
      return action.text;
    case types.UPDATE_TEXT_ERROR:
      return action.text;

    default:
      return state;
  }
}
