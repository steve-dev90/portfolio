import React from 'react'
import {connect} from 'react-redux'
import { showAbout, hideAbout } from '../actions/portfolio';

class About extends React.Component {

  render(props) {

    return (
      <React.Fragment>  
        <div className="columns">
          <div className="column is-1">
            
            {this.props.portfolio.aboutDisplay 
            ?             
            <button className="button" onClick={() => this.props.dispatch(hideAbout())}>
              <span className="icon ">
                <i className="fas fa-heading">U</i> 
              </span>
            </button> 
            :
            <button className="button" onClick={() => this.props.dispatch(showAbout())}>
              <span className="icon ">
                <i className="fas fa-heading">D</i> 
              </span>
            </button>}           
     
          </div>

          <div className="column is-11">
            <h2 className="title is-2">About</h2>
            {this.props.portfolio.aboutDisplay &&              
            <p> Bla Bla Blad </p>}        
          </div>
      
        </div>
      </React.Fragment>   
    
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.portfolio)  
  return {portfolio: state.portfolio}
}

export default connect(mapStateToProps)(About) 