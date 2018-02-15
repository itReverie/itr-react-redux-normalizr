


class suggestionsAPI {


    /*Returns an object with the recommendations property to display as autocomplete */
  static getSuggestionsByOpenQuestion(openQuestion, partId) {

    let responsePart= {
            id: 2,
            isReadOnly: false,
            type: 'noun',
            text: 'con', //TODO: Let Mark know that I'll leave the operation to array on the server
			      suggestions:['contracts','bills','payments']
        };

    let responseMock;
    //TODO: This is temporary
    if(openQuestion.id===5 && partId===2){
        responseMock=responsePart;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(responseMock);
      });
    });
  }


}

export default suggestionsAPI;