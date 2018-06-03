import React from 'react'

const Project = () => (
  <React.Fragment>          
    <article className="media">
      <figure className="media-left">
        <video width="600" height="600" controls>
          <source src="/images/shopbrovid.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </figure>
      <div className="media-content">
        <div className="content is-size-5">
        <p>ShopBro2.0 was my final group project at bootcamp. The application is to help
        people keep under budget when they are shopping. Once a budget is set, users 
        add items to a shopping list and the app keeps track of the total cost. Users
        can also see historic shopping lists.</p>
        <p>Front end technologies included React.js, Redux.js, and bulma. For the
        backend we used node.js, express.js, postgres, and knex.js. The 
        team also started to implement the project as a mobile app using React Native.</p>
        <p>The team continue to work on this project...</p>
        </div>
      </div>
    </article>
  </React.Fragment>  
)
  
export default Project

