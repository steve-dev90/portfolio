import React from 'react'
import SocialIcons from './SocialIcons'

const Header = () => (
  <React.Fragment>
    <div className="level">
       <div className="level-left">
         <div className="level-item">
           <SocialIcons iconClass={"is-hidden-touch"} />
           <span className="icon is-small is-left">
            <i className="fa fa-copyright"></i>
           </span>
           <p className="content is-size-6">
             2018 Steve Torrens
           </p>
         </div>
        </div>
      </div>
  </React.Fragment>
)

export default Header