import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function partReducer(state = initialState.parts, action) {
  switch (action.type) {
    case types.LOAD_PARTS_SUCCESS:
      return action.parts;
    case types.LOAD_PARTS_ERROR:
      return action.parts;

    default:
      return state;
  }
}
