import * as types from "./actionTypes";
import questionsApi from "../api/questionAPI";
import {normalizeData} from "../api/normalizr/question";

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
        console.log('Result from API:',result);
        const normalizedData = normalizeData(result);
        dispatch(loadPartsSuccess(normalizedData.result));
        dispatch(loadQuestionsSuccess(normalizedData.entities.questions));
      })
      .catch(error => {
        throw error;
      });

  }
}
