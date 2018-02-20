import { createSelector } from 'reselect';
import Immutable from 'immutable';
import { Map } from 'immutable';

const getQuestions = state => {
                              let theTempState=Immutable.fromJS(state);//TOASK: Is it ok to use FromJs?
                              //console.log('SELECTOR fromJS:',theTempState);
                              let pregGet=theTempState.get('questions')
                              console.log('SELECTOR GET:',pregGet);
                              //let pregGetIn=theTempState.getIn(['entities', 'questions'])
                              //console.log('SELECTOR GETIN:',pregGetIn);
                              return pregGet;
                              };

export const getQuestionsResult = createSelector(
  [ getQuestions ],
  (questions) => {  return questions }
);
