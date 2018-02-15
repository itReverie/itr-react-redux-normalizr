//TODO:Move this to an external file and add in the configuration a path so in teh future that path is replaced by the backend URL
const questions = [
  {
    id: 1,
    openQuestion: false,
    longQuestion:
      "What percentage of borrowers have outstanding contracts that are overdue?"
  },
  {
    id: 2,
    openQuestion: false,
    longQuestion:
      "How many borrowers have outstanding cotracts in the last month?"
  },
  {
    id: 3,
    openQuestion: false,
    longQuestion: "Which companies have profits greater than 1 million?"
  },
  {
    id: 4,
    openQuestion: false,
    longQuestion: "During which bimester there was a profit decrease?"
  },
  {
    id: 5,
    template:1,
    openQuestion: true,
    longQuestion: null,
        parts: [
        {
            id: 1,
            isReadOnly: true,
            type: "other",
            text: "Which",
            suggestions:[],
            
        },
        {
            id: 2,
            isReadOnly: false,
            type: "noun",
              suggestions:[],
              text: ""
        },
        {
            id: 3,
            isReadOnly: true,
            type: "other",
            text: "that are",
              suggestions:[]
        },
        {
            id: 4,
            type: "adj",
            isReadOnly: false,
            dependsOn: 1,
              suggestions:[],
              text: ""
        },
        {
            id: 5,
            isReadOnly: true,
            text: "have",
            type: "other",
              suggestions:[]
        },
        {
            id: 6,
            isReadOnly: false,
            type: "noun",
            dependsOn: 1,
              suggestions:[],
              text: ""
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
            dependsOn: 3,
              suggestions:[],
              text: ""
        }
    ]
}
];

class questionsAPI {
  static getAllQuestions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(questions);
      });
    });
  }
}

export default questionsAPI;
