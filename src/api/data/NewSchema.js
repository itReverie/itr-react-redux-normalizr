{
  byQuestionId: {
    1: {
      id: 1,
      openQuestion: false,
      longQuestion: "How many borrowers are overdue?",
      byPartId: {
        1: {
          id: 1,
          isReadOnly: true,
          text: 'How many',
          type: 'Action'
        },
        2: {
          id: 2,
          isReadOnly: false,
          type: 'Noun',
          dependsOn: 1,
          selectedValues: ['borrowers'],
          isRequired: true,
          suggestions: []
        },
        3: {
          id: 3,
          isReadOnly: true,
          text: 'are',
          type: 'Other'
        },
        4: {
          id: 4,
          isReadOnly: false,
          type: 'Adjective',
          dependsOn: 2,
          selectedValues: ['overdue'],
          isRequired: true,
          suggestions: []
        },
      }
    }
  },
  2: {
    id: 2,
    openQuestion: true,
    longQuestion: "Which",
    byPartId: {
      1: {
        id: 1,
        isReadOnly: true,
        text: 'Which',
        type: 'Action'
      },
      2: {
        id: 2,
        isReadOnly: false,
        type: 'Noun',
        dependsOn: 1,
        selectedValues: ['CustomerProduct'],
        isRequired: true,
        suggestions: []
      },
      3: {
        id: 3,
        isReadOnly: true,
        text: 'that are',
        type: 'Other'
      },
      4: {
        id: 4,
        isReadOnly: false,
        type: 'Adjective',
        dependsOn: 2,
        selectedValues: null,
        suggestions: []
      },
      5: {
        id: 5,
        isReadOnly: true,
        text: 'have',
        type: 'Relationship',
        dependsOn: 2
      },
      6: {
        id: 6,
        isReadOnly: false,
        selectedValues: ["contracts"]
        type: 'Noun',
        dependsOn: 5,
        suggestions: []
      },
      7: {
        id: 7,
        isReadOnly: true,
        text: 'that are',
        type: 'Other'
      },
      8: {
        id: 8,
        isReadOnly: false,
        type: 'Adjective',
        dependsOn: 6,
        isRequired: true,
        selectedValues: []
      }
    }
  },
  3: {
    id: 3,
    openQuestion: true,
    longQuestion: null,
    byPartId: {
      '1': {
        id: 1,
        isReadOnly: true,
        text: 'Which',
        type: 'Action'
      },
      '2': {
        id: 2,
        isReadOnly: false,
        type: 'Noun',
        dependsOn: 1,
        selectedValue: {
          value: 'contracts'
        }
      },
      '3': {
        id: 3,
        isReadOnly: true,
        text: 'that',
        type: 'Verb'
      },
      '4': {
        id: 4,
        isReadOnly: false,
        type: 'Adjective',
        dependsOn: 2,
        text: 'are',
        selectedValues: {
          value: 'overdue'
        }
      }
    }
  }
}
