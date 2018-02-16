import dataQuestions from './data/questions';
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
