exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, title: "ShopBro2.0", image: 'shopbrovid.mp4', copy: JSON.stringify([
          { para: "ShopBro2.0 was my final group project at bootcamp. The application is to help people keep under budget when they are shopping. Once a budget is set, users add items to a shopping list and the app keeps track of the total cost. Users can also see historic shopping lists." },
          { para: "Front end technologies included React.js, Redux.js, and bulma. For the backend we used node.js, express.js, postgres, and knex.js. The team also started to implement the project as a mobile app using React Native." },
          { para: "The team continue to work on this project..." }
        ])},
        {id: 2, title: "Square of Pointlessness", image: 'shopbrovid.mp4', copy: JSON.stringify([
          { para: "ShopBro2.0 was my final group project at bootcamp. The application is to help people keep under budget when they are shopping. Once a budget is set, users add items to a shopping list and the app keeps track of the total cost. Users can also see historic shopping lists." },
          { para: "Front end technologies included React.js, Redux.js, and bulma. For the backend we used node.js, express.js, postgres, and knex.js. The team also started to implement the project as a mobile app using React Native." },
          { para: "The team continue to work on this project..." }
        ])}

      ])
    })
}
