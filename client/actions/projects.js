import request from 'superagent'

export const receiveProjects = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS',
    projects
  }
}

export function getProjects () {
  console.log('GETPROJECTS')  
  return (dispatch) => {
    request
      .get(`/api/projects`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log('GE',res.body)
        dispatch(receiveProjects(res.body))
      })
  }
}
