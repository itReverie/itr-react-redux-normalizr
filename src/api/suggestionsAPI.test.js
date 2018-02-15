import recommendationsAPI from "./recommendationsAPI";

const request= { id: 5,
                 template:1,
                openQuestion: true,
                longQuestion: null,
        parts: [
        {
            id: 1,
            isReadOnly: true,
            type: "other",
            text: "Which"
        },
        {
            id: 2,
            isReadOnly: false,
            type: "noun"
        },
        {
            id: 3,
            isReadOnly: true,
            type: "other",
            text: "that are"
        },
        {
            id: 4,
            type: "adj",
            isReadOnly: false,
            dependsOn: 1
        },
        {
            id: 5,
            isReadOnly: true,
            text: "have",
            type: "other"
        },
        {
            id: 6,
            isReadOnly: false,
            type: "noun",
            dependsOn: 1
        },
        {
            id: 7,
            isReadOnly: true,
            type: "other",
            text: "that are"
        },
        {
            id: 8,
            type: "adj",
            isReadOnly: false,
            dependsOn: 3
        }
    ]
}

describe("recommendationsAPI", () => {
  it("should return the recommendations based on a template id and recommendationForId ", () => {
    //arrange
    const responsePart= {

        //TODO: Do testing not receiving all the properties. Fore example, what if the backend does not give me text or recommendations
        //templateId: 1, I don't think we need the template id 
        //part:{
            id: 2,
            isReadOnly: false,
            type: 'noun',
            text: 'con', //TODO: Let Mark know that I'll leave the operation to array on the server
			suggestions:['contracts','bills','payments']
        //}
    };

    //act
    recommendationsAPI.getrecommendationsByQuestionAndID(request, 2).then(result=>{
        //assert
        expect(result).toEqual(responsePart);
    });
  });
});
