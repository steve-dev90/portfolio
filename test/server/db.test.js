const request = require('supertest')

const env = require('./test-environment')
const projectsDb = require('../../server/db/projects')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('read projects db', () => {
  return projectsDb.getProjects(testDb)
    .then(projects => {
      expect(projects.length).toBe(3)
      expect(projects[0].hasOwnProperty('image')).toBeTruthy()
    })
})
