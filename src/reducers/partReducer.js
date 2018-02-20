import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { fromJS} from 'immutable';


export default function partReducer(state = fromJS({parts:{}}), action) {
  switch (action.type) {
    case types.LOAD_PARTS_SUCCESS:
        let newStateParts=state.mergeDeep(action.parts);
        console.log('REDUCER parts:',newStateParts);
        return newStateParts;

    case types.UPDATE_TEXT_SUCCESS:
          console.log('Reducer-UPDATE_TEXT_SUCCESS-   state: ',state);
          console.log('Reducer-UPDATE_TEXT_SUCCESS-   action: ',action);

         let filterPart=state.getIn(['byQuestionId',
                      action.questionId.toString(),
                      'byPartId',
                      action.partId.toString()]);
         console.log(filterPart);
         let updatedState = filterPart.set('text', action.updatedText)
         console.log(updatedState);
         //xxx.set('text', action.updatedText);

          return updatedState;
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
