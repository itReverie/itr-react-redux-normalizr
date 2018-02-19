import { createSelector } from 'reselect';
import Immutable from 'immutable';
import { Map } from 'immutable';

const getQuestions = state => state.get('questions');


// const getItem = (state, id) => state.byId[id];
// const getQuestions = (state, questionId) => state.parts.get('byQuestionId');
// const getItemsIds = state => state.ids;
// const getQuestionsIds = (state) => {
//   state.questions.get('byQuestionId').get('')};
// // const getItemsById = state => state.byId;
// const getQuestionsById = (state) => state.get('byId');
//
// //export
//  const getQuestionsSelector = createSelector(
//   [getQuestionsIds, getQuestionsById],
//   // (itemsIds, itemsById) => itemsIds.map(id => itemsById[id]),
//   (questionsIds, questionsById) =>
//   questionsIds.map(id => questionsById.get(id)),
// );


// export default function getQuestions(state)
// {
  // let state = Immutable.fromJS(state);
  // //console.log('SELECTOR: state ',state);
  // let taskSelector = state => state.get('questions');
  // //console.log('SELECTOR: questions ',taskSelector);
  // export const allQuestionsSelector = createSelector(
  //     [ taskSelector],
  //     questions => {  return questions.map();}
  // );
  //console.log('SELECTOR: new questions ',allQuestionsSelector);
  //return allQuestionsSelector;
//}
