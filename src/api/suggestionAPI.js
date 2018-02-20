import dataSuggestions from './data/suggestions';
class suggestionsAPI {
  static getSuggestions(parts, questionId, partId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataSuggestions);
      });
    });
  }
}

export default suggestionsAPI;
