const initialPortfolio ={
  aboutDisplay : false,
  projectsDisplay : false
}

function portfolio (state = initialPortfolio, action) {
    switch (action.type) {
      case 'SHOW_ABOUT':
        return {aboutDisplay: true}
      case 'HIDE_ABOUT':
        return {aboutDisplay: false}
      case 'SHOW_PROJECTS':
        return {projectsDisplay: true}
      case 'SHOW_PROJECTS':
        return {projectsDisplay: false}
      default:
        return state
    }
}
  
export default portfolio