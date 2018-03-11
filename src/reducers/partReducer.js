import * as types from "../actions/actionTypes";
import { fromJS} from 'immutable';


export default function partReducer(state = fromJS({parts:{}}), action) {
  switch (action.type) {
    case types.LOAD_PARTS_SUCCESS:
        let newStateParts=state.mergeDeep(action.parts);
        //console.log('REDUCER parts:',newStateParts);
        return newStateParts;

    case types.UPDATE_TEXT_SUCCESS:
          //console.log('Reducer-UPDATE_TEXT_SUCCESS-   state: ',state);
          //console.log('Reducer-UPDATE_TEXT_SUCCESS-   action: ',action);

         let filterPart=state.setIn(['byQuestionId',
                      action.questionId.toString(),
                      'byPartId',
                      action.partId.toString(),
                      'text'],action.updatedText);
         //console.log('Reducer-UPDATE_TEXT_SUCCESS-   NEW state: ',filterPart);
         return filterPart;
    case types.UPDATE_TEXT_ERROR:
          return state.part;
    case types.LOAD_SUGGESTIONS_SUCCESS:
          let updateSuggestions=state.setIn(['byQuestionId',
                 action.questionId.toString(),
                 'byPartId',
                 action.partId.toString(),
                 'suggestions'],action.suggestions);
            //console.log(updateSuggestions);
            return updateSuggestions;
    case types.LOAD_SUGGESTIONS_ERROR:
            return state.part;
    default:
      return state;
  }
}
