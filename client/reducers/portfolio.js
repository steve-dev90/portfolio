const initialPortfolio ={
  aboutDisplay : false,
  projectsDisplay : false,
  contactDisplay : false,
  contactFormDisplay : true
}

function portfolio (state = initialPortfolio, action) {
    switch (action.type) {
      case 'SHOW_ABOUT':
        return { 
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: true,
                contactDisplay : state.contactDisplay,
                contactFormDisplay : state.contactFormDisplay
               }
      case 'HIDE_ABOUT':
        return {
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: false,
                contactDisplay : state.contactDisplay,
                contactFormDisplay : state.contactFormDisplay
               }
      case 'SHOW_PROJECTS':
        return {
                projectsDisplay: true, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : state.contactDisplay,
                contactFormDisplay : state.contactFormDisplay
                }
      case 'HIDE_PROJECTS':
        return {
                projectsDisplay: false, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : state.contactDisplay,
                contactFormDisplay : state.contactFormDisplay
               }
      case 'SHOW_CONTACT':
        return {
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : true,
                contactFormDisplay : state.contactFormDisplay
                }
      case 'HIDE_CONTACT':
        return {
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : false,
                contactFormDisplay : state.contactFormDisplay
               }  
      case 'SHOW_CONTACT_FORM':
        return {
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : state.contactDisplay,
                contactFormDisplay : true
                }
      case 'HIDE_CONTACT_FORM':
        return {
                projectsDisplay: state.projectsDisplay, 
                aboutDisplay: state.aboutDisplay,
                contactDisplay : state.contactDisplay,
                contactFormDisplay : false
                }                   
      default:
        return state
    }
}
  
export default portfolio