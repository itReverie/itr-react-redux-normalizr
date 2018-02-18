import { createSelector } from 'reselect';

// const getItem = (state, id) => state.byId[id];
// const getQuestions = (state, questionId) => state.parts.get('byQuestionId');
// const getItemsIds = state => state.ids;
const getQuestionsIds = (state) => {
  state.questions.get('byQuestionId').get('')};
// const getItemsById = state => state.byId;
const getQuestionsById = (state) => state.get('byId');
export const getQuestions = createSelector(
  [getQuestionsIds, getQuestionsById],
  // (itemsIds, itemsById) => itemsIds.map(id => itemsById[id]),
  (questionsIds, questionsById) =>
  questionsIds.map(id => questionsById.get(id)),
);
