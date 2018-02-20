import { createSelector } from 'reselect';
import { fromJS} from 'immutable';

const getParts = (state, questionId ) => {
                              let currentQuestion=questionId.questionId.toString();
                              //console.log('SELECTOR PARTS questionId: ',currentQuestion);
                              let theTempState=fromJS(state);//TOASK: Is it ok to use FromJs?
                              //console.log('SELECTOR PARTS fromJS:',theTempState);
                              let newState=theTempState.getIn(['parts','byQuestionId',currentQuestion]);
                              //.filter(x=>x.id===currentQuestion)
                              //console.log('SELECTOR GET PARTS:',pregGet);
                              //let pregGetIn=theTempState.getIn(['entities', 'questions'])
                              //console.log('SELECTOR PARTS newState: ',newState);
                              return newState;
                              };

export const getPartsResult = createSelector(
  [ getParts ],
  (parts) => {  return parts }
);
