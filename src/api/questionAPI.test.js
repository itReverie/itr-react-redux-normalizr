import questionsAPI from './questionAPI';

describe("questionsAPI", () => {
  it("should return all questions (close and open) as well as it's parts", () => {

    //act
    questionsAPI.getAllQuestions().then(result=>{
        //assert
        expect(result.questions.length).toEqual(4);
    });
  });
});
