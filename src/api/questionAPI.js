import dataQuestions from './data/questionsOption1';
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
