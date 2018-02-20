import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { fromJS} from 'immutable';

//initialState --renders empty blank
//initialState.questions --Reducer "questions" returned undefined when handling "@@INIT" action.
export default function questionReducer(state = fromJS({}), action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      console.log('REDUCER questions original state:',state);
      console.log('REDUCER questions action:',action);
      let newState=state.mergeDeep(action.payload);
      console.log('REDUCER questions new state:',newState);
      return newState;
    case types.LOAD_PARTS_SUCCESS:
        let newStateParts=state.mergeDeep(action.payload);
        console.log('REDUCER parts new state:',newStateParts);
        return newStateParts;

    default:
      return state;
  }
}
