import * as types from "./actionTypes";
import questionsApi from "../api/questionAPI";

export function loadQuestions() {
  return function(dispatch) {
    //Call to the API
    return questionsApi.getAllQuestions()
      .then(questions => {
        dispatch(loadQuestionsSuccess(questions));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadQuestionsSuccess(questions) {
         return { type: types.LOAD_QUESTIONS_SUCCESS,
                  questions: questions };
       }
