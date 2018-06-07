import React from 'react'

const Project = (props) => (
  
  <React.Fragment> 
    <div className="column is-8">
      <div className="content is-size-6">        
        <h3 className="title has-text-info">{props.project.title}</h3> 

        <p className="has-text-centered">
            <video width="600" height="600" controls>
            <source src={`/images/${props.project.image}`} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
        </p> 

        {props.project.copy.map((copy, index) => {
          return <p className="has-text-justified" key={index}>{copy.para}</p>
        })}
      </div>
    </div>  
  </React.Fragment>   
)

export default Project

