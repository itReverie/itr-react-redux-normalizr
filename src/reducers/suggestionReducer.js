import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function suggestionReducer(state = initialState.suggestions, action) {
  switch (action.type) {
    case types.LOAD_SUGGESTIONS_SUCCESS:
      return action.suggestions;
    case types.LOAD_SUGGESTIONS_ERROR:
      return action.suggestions;
    default:
      return state;
  }
}
