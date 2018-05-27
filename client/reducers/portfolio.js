const initialPortfolio ={
  aboutDisplay : false,
  projectsDisplay : false
}

function portfolio (state = initialPortfolio, action) {
    switch (action.type) {
      case 'SHOW_ABOUT':
        return {projectDisplay: state.projectDisplay, aboutDisplay: true}
      case 'HIDE_ABOUT':
        return {projectDisplay: state.projectDisplay, aboutDisplay: false}
      case 'SHOW_PROJECTS':
        return {projectsDisplay: true, aboutDisplay: state.aboutDisplay}
      case 'HIDE_PROJECTS':
        return {projectsDisplay: false, aboutDisplay: state.aboutDisplay}
      default:
        return state
    }
}
  
export default portfolio