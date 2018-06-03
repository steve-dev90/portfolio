function projects (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_projects':
      return [...action.projects]
    default:
      return state
  }
}

export default projects
