import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function partReducer(state = initialState.part, action) {
  switch (action.type) {
    case types.UPDATE_TEXT_SUCCESS:
        // console.log('Reducer-UPDATE_TEXT_SUCCESS-   state: ',state);
        // console.log('Reducer-UPDATE_TEXT_SUCCESS-   action: ',action);

         let newPartState2= Object.assign({},state.part);
         newPartState2.id=   action.part.id;
         newPartState2.text= action.part.text;
         newPartState2.type= action.part.type;
         newPartState2.suggestions= action.part.suggestions;
        // console.log('NEW STATE: ',newPartState2);
        // newPartState2.text= action.part.text;
        return newPartState2;
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
