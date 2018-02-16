import { normalize, schema } from 'normalizr';

// Define a question schema
const suggestion = new schema.Entity('suggestions');

// Define a part schema
const part = new schema.Entity('parts', {
  suggestions: [suggestion]
});

// Define your article
const question = new schema.Entity('questions', {
  parts: [ part ]
});

const normalizedData = normalize(originalData, question);
