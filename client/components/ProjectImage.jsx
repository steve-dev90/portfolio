import React from 'react'
import Image from './Image'

const ProjectImage = (props) => (
  <Image src={`/images/${props.image}`} className="projectimg" />
)

export default ProjectImage