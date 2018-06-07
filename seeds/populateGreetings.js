exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, title: "ShopBro2.0", image: 'shopbrovid.mp4', copy: JSON.stringify([
          { para: "ShopBro2.0 was my final group project at bootcamp. The application helps people keep under budget when they are shopping. It also keeps track of past shopping spends." },
          { para: "Front end technologies used include React.js, Redux.js, and bulma. For the backend we used node.js, express.js, postgres, and knex.js. The team also started to implement the project as a mobile app using React Native." }
        ])},
        {id: 2, title: "Square of Pointlessness", image: 'square.mp4', copy: JSON.stringify([
          { para: "Square of Pointlessness was my final exercise for bootcamp prep. I used native Javascript to animate a square." }
        ])}

      ])
    })
}
