import React from 'react'
import ImageLoader from 'react-load-image'

function smallImagePath(image) {
  return `${image.slice(0,-4)}-small.${image.slice(-3)}`
}

const Image = (props) =>
  <ImageLoader {...props}>
    <img className={ props.className } />
    <div></div>
    <img src={ smallImagePath(props.src) } style={{filter: 'blur(20px)'}} className={ props.className } />
  </ImageLoader>

export default Image;