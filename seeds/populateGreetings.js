exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, title: "ShopBro2.0", image: 'shopbrovid.mp4', copy: JSON.stringify([
          { para: "ShopBro2.0 was my final group project at bootcamp. The application helps people keep under budget when they are shopping. It also keeps track of past shopping spends." },
          { para: "Front end technologies used include React.js, Redux.js, and bulma. For the backend we used node.js, express.js, postgres, and knex.js. The team also started to implement the project as a mobile app using React Native." }
        ]), old_project: false},
        {id: 2, title: "Square of Pointlessness", image: 'square.mp4', copy: JSON.stringify([
          { para: "Square of Pointlessness was my final exercise for bootcamp prep. I used native Javascript to animate a square." }
        ]), old_project: true},
        {id: 3, title: "CompareBear Australia", image: 'Comparebear.png', copy: JSON.stringify([
          { para: "I was contacted by a small start-up, called Glimp, to work on the launch of their Australian utility comparison website. CompareBear Australia allows users to compare the price and services of different utility companies." },
          { para: "I was responsible for designing, building and testing the back-end of this application. My work included database set-up, data importing rake tasks, data validation and internal APIs. In particular, I developed business logic to calculate comparative annual costs for different electricity retailers, taking into account different tariff types and energy consumption patterns across Australia. I also set up front-end skeleton forms and assocciated API calls to assist the front-end developer." },
          { para: "Technologies that I used for this project included: Ruby on Rails, PostgreSQL, Minitest, Jquery, git and Heroku." }
        ]), old_project: false},
      ])
    })
}
