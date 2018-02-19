import { normalize, schema } from 'normalizr';


const suggestion = new schema.Entity('suggestions');
const part = new schema.Entity('parts', { suggestions: [suggestion]});
const question = new schema.Entity('questions', {
                                                  parts: [ part ]
                                                });
const questionsList = [question];
const questionsNormalizr = (originalData) => normalize(originalData, questionsList);
export default questionsNormalizr;
