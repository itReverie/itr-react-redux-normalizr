export default {
  questions: [{
    id: 3,
    template: 1,
    openQuestion: true,
    longQuestion: "Which Custom",
    parts: [1, 2, 3, 4]
  }],
  parts: {
    byQuestionId: {
      3: {
        byPartId: {
          1: {
            id: 1,
            isReadOnly: true,
            type: "other",
            text: "Which"
          },
          2: {
            id: 2,
            isReadOnly: false,
            type: "noun",
            text: "",
            suggestions: []
          }
        }
      }

    }
  }
}
