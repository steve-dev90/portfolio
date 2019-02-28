import React from 'react'
import Image from './Image'

function smallImagePath(image) {
  console.log(`${image.slice(0,-4)}-small.png`)
  return `./images/${image.slice(0,-4)}-small.png`
}

const Project = (props) => (

  <React.Fragment>
    <div className="column is-8">
      <div className="content is-size-6 is-size-6-mobile">
        <h3 className="title is-4 has-text-centered">{props.project.title}</h3>

        <div className="has-text-centered ">
          {props.project.image.slice(-3) == 'mp4' ?
            <video width="600" height="600" controls>
              <source src={`/images/${props.project.image}`} type="video/mp4"/>
              Your browser does not support the video tag.
            </video> :
            <div className="image is-5by3">
              <Image src={`/images/${props.project.image}`}>
                <img />
                <img src={smallImagePath(props.project.image)} style={{filter: 'blur(20px)'}} />
              </Image >
            </div>
           }
        </div>

        {props.project.copy.map((copy, index) => {
          return <p className="has-text-justified has-text-left-mobile" key={index}>{copy.para}</p>
        })}
      </div>
    </div>
  </React.Fragment>
)

export default Project

