import React from 'react'

const SocialIcons = (props) => (
  <React.Fragment>  
    <div className={`navbar-item ${props.iconClass}`}>
      <a href="https://github.com/steve-dev90"><span className="icon">
        <i className="fa fa-github"></i>
      </span></a>  
    </div>
    <div className={`navbar-item ${props.iconClass}`}>
      <a href="https://www.linkedin.com/in/steve-torrens-6100b721/">
        <span className="icon">
          <i className="fa fa-linkedin"></i>
        </span></a>  
    </div>  
  </React.Fragment>  
)
  
export default SocialIcons