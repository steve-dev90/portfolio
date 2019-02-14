const initialPortfolio ={
  contactFormDisplay : true,
  showModal : false
}

function portfolio (state = initialPortfolio, action) {
    switch (action.type) {
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
      case 'OPEN_MODAL':
        return {
                showModal: true,
                contactFormDisplay : true
                }
      case 'CLOSE_MODAL':
        return {
                showModal: false,
                contactFormDisplay : true
                }
      default:
        return state
    }
}

export default portfolio