import React from 'react'

const Project = (props) => (
  
  <React.Fragment> 
    <div className="column is-12">
      <h3 className="title">{props.project.title}</h3> 
    </div>

        <div className="column is-6">
            <div className="content is-size-5 has-text-justified">
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

        <div className="column is-6">
            <video width="600" height="600" controls>
            <source src="/images/shopbrovid.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
        </div>    


</React.Fragment>   
)

export default Project

