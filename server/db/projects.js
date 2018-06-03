const defaultConn = require('./connection')

const getProjects = (testConn) => {
  const db = testConn || defaultConn
  return db('projects')
    .select()
}

module.exports = {
  getProjects
}
