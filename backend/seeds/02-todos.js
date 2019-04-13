exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          title: "brush teeth",
          date: "2019-01-22",
          description: "6:00 am",
          userId: 1
        },
        {
          id: 2,
          title: "take a shower",
          date: "2019-01-22",
          description: "6:30 am",
          userId: 1
        },
        {
          id: 3,
          title: "go on a walk",
          date: "2019-01-22",
          description: "7:00 am",
          userId: 1
        },
        {
          id: 4,
          title: "read a book",
          date: "2019-01-22",
          description: "11:00 am",
          userId: 2
        },
        {
          id: 5,
          title: "exercise",
          date: "2019-01-22",
          description: "1:00 pm",
          userId: 2
        },
        {
          id: 6,
          title: "study",
          date: "2019-01-22",
          description: "3:00 pm",
          userId: 2
        },
        {
          id: 7,
          title: "meditate",
          date: "2019-01-22",
          description: "6:00 pm",
          userId: 3
        },
        {
          id: 8,
          title: "eat some food",
          date: "2019-01-22",
          description: "6:30 pm",
          userId: 3
        },
        {
          id: 9,
          title: "go to sleep",
          date: "2019-01-22",
          description: "9:30 pm",
          userId: 3
        }
      ]);
    });
};
