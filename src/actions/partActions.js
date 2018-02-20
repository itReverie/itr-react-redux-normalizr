import * as types from "./actionTypes";
import suggestionApi from "../api/suggestionAPI";


function loadSuggestionsSuccess(suggestions, questionId, partId) {
         return { type: types.LOAD_SUGGESTIONS_SUCCESS,
                  suggestions: suggestions,
                  questionId: questionId,
                  partId: partId};
}

export function updateTextSuccess(updatedText, questionId, partId) {
         return function (dispatch){
           dispatch(
                { type: types.UPDATE_TEXT_SUCCESS,
                  updatedText: updatedText,
                  questionId: questionId,
                  partId: partId});
                }
              }

export function loadSuggestions(parts, questionId, partId) {
  return function (dispatch){
  
    return suggestionApi.getSuggestions(parts, questionId, partId)
      .then(result=> {
        dispatch(loadSuggestionsSuccess(result.suggestions, questionId, partId));
      })
      .catch(error => {
        throw error;
      });

  }
}


export function requestQuery(parts, questionId)
{

}
