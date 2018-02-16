import * as types from "./actionTypes";

export function updateTextSuccess(text) {
         return function (dispatch){
           dispatch(
                { type: types.UPDATE_TEXT_SUCCESS,
                  text: text });
                }
              }
