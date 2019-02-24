import React from 'react'

const Project = (props) => (

  <React.Fragment>
    <div className="column is-8">
      <div className="content is-size-6 is-size-6-mobile">
        <h3 className="title is-4 has-text-centered">{props.project.title}</h3>

        <p className="has-text-centered">
          {props.project.image.slice(-3) == 'mp4' ?
            <video width="600" height="600" controls>
            <source src={`/images/${props.project.image}`} type="video/mp4"/>
            Your browser does not support the video tag.
            </video> :
           <img src={`/images/${props.project.image}`} alt="Project image"></img>}
        </p>

        {props.project.copy.map((copy, index) => {
          return <p className="has-text-justified has-text-left-mobile" key={index}>{copy.para}</p>
        })}
      </div>
    </div>
  </React.Fragment>
)

export default Project

