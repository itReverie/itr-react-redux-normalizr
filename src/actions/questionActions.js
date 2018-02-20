import * as types from "./actionTypes";
import questionsApi from "../api/questionAPI";
//import normalizrQuestions from "../api/normalizr/normalizrQuestions";

function loadPartsSuccess(parts) {
         return { type: types.LOAD_PARTS_SUCCESS,
                  parts: parts };
       }

function loadQuestionsSuccess(questions) {
         return { type: types.LOAD_QUESTIONS_SUCCESS,
                  questions: questions };
       }

export function loadQuestions() {
  return function (dispatch){
    return questionsApi.getAllQuestions().then(apiData=> {
        //console.log('Result from API:',apiData);
        //const normalizedData = normalizrQuestions(apiData);
        //console.log('Result from NORMALIZR:',normalizedData);
        dispatch(loadPartsSuccess(apiData.parts));
        dispatch(loadQuestionsSuccess(apiData.questions));//ASK: Do I need to send all data or filter questions?
      })
      .catch(error => {
        throw error;
      });

  }
}
