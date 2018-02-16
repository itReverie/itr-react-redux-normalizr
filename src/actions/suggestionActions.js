import * as types from "./actionTypes";
//import suggestionApi from "../api/suggestionAPI";

function loadSuggestionsSuccess(suggestions) {
         return { type: types.LOAD_SUGGESTIONS_SUCCESS,
                  parts: suggestions};
}

export function updateTextSuccess(text) {
         return function (dispatch){
           dispatch(
                { type: types.UPDATE_TEXT_SUCCESS,
                  text: text });
                }
              }


// export function loadSuggestions() {
//
//   return function (dispatch){
//
//     return suggestionsApi.getAllSuggestions().then(result=> {
//         dispatch(loadPartsSuccess(result.parts));
//         dispatch(loadQuestionsSuccess(result.questions));
//       })
//       .catch(error => {
//         throw error;
//       });
//
//   }
// }
