import React from 'react'
import ImageLoader from 'react-load-image'

const Image = (props) =>
  <ImageLoader {...props}>
    {props.children[0]}
    <div></div>
    {props.children[1]}
  </ImageLoader>

export default Image;