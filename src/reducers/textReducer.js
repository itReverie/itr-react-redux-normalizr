import * as types from "../actions/actionTypes";
import initialState from "./initialState";
const { Map, is } = require('immutable');

export default function textReducer(state = initialState.text, action) {
  switch (action.type) {
    case types.UPDATE_TEXT_SUCCESS:
      //I need to add the property text to the part object
      //so I can get rid of the local state as that should not be there
      //I should be reading from part
      return action.text;
    case types.UPDATE_TEXT_ERROR:
      return action.text;

    default:
      return state;
  }
}
