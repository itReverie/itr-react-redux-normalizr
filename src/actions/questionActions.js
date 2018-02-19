import * as types from "./actionTypes";
import questionsApi from "../api/questionAPI";
import normalizrQuestions from "../api/normalizr/normalizrQuestions";

function loadQuestionsSuccess(payload) {
         return { type: types.LOAD_QUESTIONS_SUCCESS,
                  payload: payload };
       }

export function loadQuestions() {
  return function (dispatch){
    return questionsApi.getAllQuestions().then(apiData=> {
        console.log('Result from API:',apiData);
        const normalizedData = normalizrQuestions(apiData);
        console.log('Result from NORMALIZR:',normalizedData);
        dispatch(loadQuestionsSuccess(normalizedData));//ASK: Do I need to send all data or filter questions? 

      })
      .catch(error => {
        throw error;
      });

  }
}
