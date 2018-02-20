import dataQuestions from './data/questionsOption2';
class questionsAPI {
  static getAllQuestions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataQuestions);
      });
    });
  }
}

export default questionsAPI;
