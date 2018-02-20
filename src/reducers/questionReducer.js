import * as types from "../actions/actionTypes";
import { List, fromJS} from 'immutable';

//initialState --renders empty blank
//initialState.questions --Reducer "questions" returned undefined when handling "@@INIT" action.
export default function questionReducer(state = fromJS({questions:[]}), action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      //console.log('REDUCER questions original state:',state);
      //console.log('REDUCER questions action:',action);
      let newState=List(action.questions);
      //console.log('REDUCER questions:',newState);
      return newState;
    default:
      return state;
  }
}
