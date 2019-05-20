import {getProjects, receiveProjects} from '../../../client/actions/projects'
import nock from 'nock'

test('Receive Projects action creator', () => {
  const fakeProjects = [
    'Project1'
  ]

  const expected = {
    type: 'RECEIVE_PROJECTS',
    projects: fakeProjects
  }

  const actual = receiveProjects(fakeProjects)

  expect(actual).toEqual(expected)
})

test('getProjects will dispatch an action on success', () => {
  const fakeProjects = [
    'Project1'
  ]
  const scope = nock('http://localhost:80')
    .get('/api/projects')
    .reply(200, fakeProjects);

  const expectedAction = {
    type: 'RECEIVE_PROJECTS',
    projects: fakeProjects
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getProjects()(dispatch)

})

test('getProjects error', () => {
  const scope = nock('http://localhost:80')
    .get('/api/projects')
    .reply(404);

  const actual = getProjects()()
  expect(actual).toBe(undefined)
})
