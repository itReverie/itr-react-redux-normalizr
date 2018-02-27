import dataSuggestions from './data/suggestions';
class suggestionsAPI {
  static getSuggestions(parts, questionId, partId) {
    //console.log(parts);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataSuggestions);
      });
    });
  }
}

export default suggestionsAPI;
