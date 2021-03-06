export default [
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
  },
  {
    id: 6,
    template:2,
    openQuestion: true,
    longQuestion: null,
        parts: [
        {
            id: 1,
            isReadOnly: true,
            type: "other",
            text: "How many",
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
        }
    ]
  }

]
