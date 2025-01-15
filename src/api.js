const categories = [
  {
    name: "Information Technology",
    id: "information-technology",
    sessions: [
      {
        name: "C218 | UI/UX Design for Apps",
        id: "c218",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        speaker: {
          name: "Azhar Kamar",
          title: "Lecturer"
        },
      },
      {
        name: "C346 | Mobile App Development",
        id: "c346",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer"
        },
      },
    ],
  },
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
