import { createSelector } from 'reselect';

// const getItem = (state, id) => state.byId[id];
const getQuestions = (state, questionId) => state.parts.get('byQuestionId');
// const getItemsIds = state => state.ids;
const getQuestionsIds = state => state.parts.get('byQuestionId').get('');
// const getItemsById = state => state.byId;
const getPartsById = state => state.get('byId');
const getParts = createSelector(
  [getPartsIds, getPartsById],
  // (itemsIds, itemsById) => itemsIds.map(id => itemsById[id]),
  (partsIds, partsById) => partsIds.map(id => partsById.get(id)),
);
