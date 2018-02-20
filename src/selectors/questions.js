import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const getQuestions = state => {
                              let theTempState=fromJS(state);//TOASK: Is it ok to use FromJs?
                              let newState=theTempState.get('questions')
                              console.log('SELECTOR QUESTIONS newState:',newState);
                              return newState;
                              };

export const getQuestionsResult = createSelector(
  [ getQuestions ],
  (questions) => {  return questions }
);
