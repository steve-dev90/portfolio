const initialPortfolio ={
  aboutDisplay : false,
  projectsDisplay : false,
  contactDisplay : false
}

function portfolio (state = initialPortfolio, action) {
    switch (action.type) {
      case 'SHOW_ABOUT':
        return { 
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: true,
                contactDisplay : state.contactDisplay
               }
      case 'HIDE_ABOUT':
        return {
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: false,
                contactDisplay : state.contactDisplay
               }
      case 'SHOW_PROJECTS':
        return {
                projectsDisplay: true, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : state.contactDisplay
                }
      case 'HIDE_PROJECTS':
        return {
                projectsDisplay: false, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : state.contactDisplay
               }
      case 'SHOW_CONTACT':
        return {
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : true
                }
      case 'HIDE_CONTACT':
        return {
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : false
               }     
      default:
        return state
    }
}
  
export default portfolio