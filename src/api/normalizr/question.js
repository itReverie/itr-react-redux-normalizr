import { normalize, schema } from 'normalizr';
import originalSchema from "../data/originalSchema";
// Define a suggestion schema
const suggestion = new schema.Entity('suggestions');

// Define a part schema
const part = new schema.Entity('parts', {
  suggestions: [suggestion]
});

// Define a question schema
const question = new schema.Entity('questions', {
                                                  parts: [ part ]
                                                });

const questionArray = new schema.Array(question);


export function normalizeData(originalData){
  const normalizedData = normalize(originalData, {questions:questionArray});
  console.log('Result after NORMALIZR:',normalizedData);
  return normalizedData;
}
