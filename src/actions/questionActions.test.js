import {normalizeData} from "../api/normalizr/question";
import dataQuestions from '../api/data/questions';

describe("normalizr data", () => {
  it("should normalizr data based on a questions schema", () => {

    //act
  const normalizedData = normalizeData(dataQuestions)
  console.log(normalizedData);
  expect(result.questions.length).toEqual(4);

  });
});
