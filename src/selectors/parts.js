import { createSelector } from 'reselect';
import Immutable from 'immutable';
import { Map } from 'immutable';

const getParts = (state, questionId ) => {
                              let currentQuestion=questionId.questionId;
                              console.log('SELECTOR questionId: ',currentQuestion);
                              let theTempState=Immutable.fromJS(state);//TOASK: Is it ok to use FromJs?
                              console.log('SELECTOR fromJS:',theTempState);
                              let pregGet=theTempState.getIn(['parts','byQuestionId', currentQuestion])
                              console.log('SELECTOR GET PARTS:',pregGet);
                              //let pregGetIn=theTempState.getIn(['entities', 'questions'])
                              //console.log('SELECTOR GETIN:',pregGetIn);
                              return pregGet;
                              };

export const getPartsResult = createSelector(
  [ getParts ],
  (parts) => {  return parts }
);
