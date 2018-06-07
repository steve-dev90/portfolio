exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, title: "ShopBro2.0", image: 'shopbrovid.mp4', copy: JSON.stringify([
          { para: "ShopBro2.0 was my final group project at bootcamp. " },
          { para: "Front end technologies used include React.js, Redux.js, " }
        ])},
        {id: 2, title: "Square of Pointlessness", image: 'square.mp4', copy: JSON.stringify([
          { para: "Square of Pointlessness was my " }
        ])}

      ])
    })
}
