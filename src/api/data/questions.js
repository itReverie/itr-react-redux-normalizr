export default {
  questions: [{
      id: 1,
      openQuestion: false,
      longQuestion: "What percentage of borrowers have outstanding contracts that are overdue?"
    },
    {
      id: 2,
      openQuestion: false,
      longQuestion: "How many borrowers have outstanding contracts in the last month?"
    },
    {
      id: 3,
      template: 1,
      openQuestion: true,
      longQuestion: "Which Custom",
      parts: [1, 2, 3, 4]
    },
    {
      id: 4,
      template: 2,
      openQuestion: true,
      longQuestion: "How many Custom",
      parts: [1, 2]
    }

  ],
  parts:
    {
      byId:{
      3: [
        {
          id: 1,
          isReadOnly: true,
          type: "other",
          text: "Which"
        },
        {
          id: 2,
          isReadOnly: false,
          type: "noun",
          text: "",
          suggestions: []
        },
        {
          id: 3,
          isReadOnly: true,
          type: "other",
          text: "that are"
        },
        {
          id: 4,
          isReadOnly: false,
          type: "adj",
          text: "",
          suggestions: []
        },
        {
          id: 5,
          isReadOnly: true,
          type: "other",
          text: "have"
        },
        {
          id: 6,
          isReadOnly: false,
          type: "noun",
          text: "",
          suggestions: []
        }
      ],
      4: [
        {
          id: 1,
          isReadOnly: true,
          type: "other",
          text: "How many"
        },
        {
          id: 2,
          isReadOnly: false,
          type: "noun",
          text: "",
          suggestions: []
        },
        {
          id: 3,
          isReadOnly: false,
          type: "adjective",
          text: "",
          suggestions: []
        }
      ]
    }
    }
}
