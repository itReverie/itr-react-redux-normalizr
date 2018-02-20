import { createSelector } from 'reselect';
import Immutable from 'immutable';
import { Map } from 'immutable';

const getPart = (state, part ) => {
                              let currentQuestion=part.questionId.toString();
                              let currentPart=part.partId.toString();
                              console.log('SELECTOR PART  HEREEEEE part: ',part);
                              let theTempState=Immutable.fromJS(state);//TOASK: Is it ok to use FromJs?
                              console.log('SELECTOR PART fromJS:',theTempState);
                              let statePart=theTempState.getIn(['parts','byQuestionId',currentQuestion, 'byPartId', currentPart]);
                              console.log('SELECTOR PART newState:',statePart);
                              return statePart;
                              };

export const getPartResult = createSelector(
  [ getPart ],
  (part) => {  return part }
);
