const request = require('supertest')

jest.mock('../../server/db/projects', () => ({
  getProjects: () => Promise.resolve([
    {id: 2, title: "Square of Pointlessness", image: 'square.mp4', copy: JSON.stringify([
      { para: "Square of Pointlessness was my final exercise" }
    ])},
    {id: 3, title: "Square of Awesomeness", image: 'square.mp4', copy: JSON.stringify([
      { para: "Square of Awesomeness never happened" }
    ])},    
  ])
}))

const server = require('../../server/server')

test('GET /', () => {
  return request(server)
    .get('/api/projects')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
