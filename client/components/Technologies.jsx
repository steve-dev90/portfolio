import React from 'react'

const techFileNames = ["ruby", "javascript", "rails", "react", "redux", "jquery",
  "node", "html5", "css3", "bulma", "git", "heroku"]

  const Technologies = (props) => (

  <React.Fragment>
    <div className="has-text-centered">
          {techFileNames.map((techFileName, index) =>
            <img className="tech-image" key={index} src={`/images/technologies/${techFileName}.png`} alt={`${techFileName}`}></img>
          )}
    </div>
  </React.Fragment>
)

export default Technologies