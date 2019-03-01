import React from 'react'
import Image from './Image'

const ProjectImage = (props) => (
  <div className="image is-5by3">
    <Image src={`/images/${props.image}`}  />
  </div>
)

export default ProjectImage