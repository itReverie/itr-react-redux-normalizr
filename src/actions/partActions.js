//I need to add the property text to the part object
//so I can get rid of the local state as that should not be there
//I should be reading from part

import * as types from "./actionTypes";
import suggestionApi from "../api/suggestionAPI";


function loadSuggestionsSuccess(suggestions) {
         return { type: types.LOAD_SUGGESTIONS_SUCCESS,
                  suggestions: suggestions};
}


export function updateTextSuccess(part) {
         return function (dispatch){
           dispatch(
                { type: types.UPDATE_TEXT_SUCCESS,
                  part: part});
                }
              }

export function loadSuggestions(openQuestion, partId) {
  return function (dispatch){

    return suggestionApi.getSuggestions(openQuestion, partId)
      .then(result=> {
        dispatch(loadSuggestionsSuccess(result.suggestions));
      })
      .catch(error => {
        throw error;
      });

  }
}
