import request from 'superagent'

export const receiveProjects = (projects) => {
  return {
    type: 'RECEIVE_PROJECTS',
    projects
  }
}

export function getProjects () {
  return (dispatch) => {
    request
      .get(`/api/projects`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveProjects(res.body))
      })
  }
}
