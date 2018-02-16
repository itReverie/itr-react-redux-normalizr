import * as types from "./actionTypes";
import questionsApi from "../api/questionAPI";

function loadPartsSuccess(parts) {
         return { type: types.LOAD_PARTS_SUCCESS,
                  parts: parts};
}

function loadQuestionsSuccess(questions) {
         return { type: types.LOAD_QUESTIONS_SUCCESS,
                  questions: questions };
       }

export function loadQuestions() {

  return function (dispatch){

    return questionsApi.getAllQuestions().then(result=> {
        dispatch(loadPartsSuccess(result.parts));
        dispatch(loadQuestionsSuccess(result.questions));
      })
      .catch(error => {
        throw error;
      });

  }

}

// export function loadQuestions(dispatch)
// {
//   return questionsApi.getAllQuestions().then(result=> {
//       dispatch(loadQuestionsSuccess(result.questions));
//       //dispatch(loadParts());
//     })
//     .catch(error => {
//       throw error;
//     });
// }

// export function loadParts()
// {
//
// }
//
// export function loadSuggestions()
// {
//
// }
