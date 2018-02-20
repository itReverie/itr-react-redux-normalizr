import * as types from "./actionTypes";
import suggestionApi from "../api/suggestionAPI";


function loadSuggestionsSuccess(suggestions) {
         return { type: types.LOAD_SUGGESTIONS_SUCCESS,
                  suggestions: suggestions};
}

export function updateTextSuccess(part, questionId) {
         return function (dispatch){
           dispatch(
                { type: types.UPDATE_TEXT_SUCCESS,
                  part: part,
                  questionId: questionId});
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
