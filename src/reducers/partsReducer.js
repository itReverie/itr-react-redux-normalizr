import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { List, Map } from 'immutable';


export default function partReducer(state = Map({}), action) {
  switch (action.type) {
    case types.LOAD_PARTS_SUCCESS:
      console.log('ACTION PARTS: ',action.parts);
      let parts=Map(action.parts);
      console.log('Reducer LOAD PARTS SUCCESS:',parts);
      return parts;
    case types.LOAD_PARTS_ERROR:
      return action.parts;
    case types.UPDATE_TEXT_SUCCESS:
          console.log('Reducer-UPDATE_TEXT_SUCCESS-   state: ',state);
          console.log('Reducer-UPDATE_TEXT_SUCCESS-   action: ',action);

          console.log(state.byQuestionId[action.questionId].byPartId[action.part.id]);
         //  return {
         //   ...state.byQuestionId[action.questionId].byPartId[action.part.id],
         //    Object.assign({},action.part)
         // };
          return state.parts;
    case types.UPDATE_TEXT_ERROR:
          return state.part;
    case types.LOAD_SUGGESTIONS_SUCCESS:
            console.log('Reducer-SUGGESTIONS_SUCCESS-   state: ',state);
            console.log('Reducer-SUGGESTIONS_SUCCESS-   action: ',action);


              let newPartState3= Object.assign({},state);
              newPartState3.suggestions= action.suggestions;
              console.log('Reducer-SUGGESTIONS_SUCCESS-   NEW STATE: ',newPartState3);
            return newPartState3;
    case types.LOAD_SUGGESTIONS_ERROR:
            return state.part;
    default:
      return state;
  }
}
