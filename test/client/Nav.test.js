import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import './enzymeSetup'
import Nav from '../../client/components/Nav'
import { handleOpenModal } from '../../client/actions/portfolio'
import './setup-dom'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router';

const mockStore = configureStore([])

// jest.mock('../../client/actions/portfolio.js', () => ({
//   handleOpenModal: () => ({
//     type: 'FAKE_ACTION'
//   })
// }))

// test('About.jsx buttons are working', () => {
//   const store = mockStore({
//     portfolio: [{aboutDisplay: true}]
//   })

//   const wrapper = mount (
//     <Provider store={store}>
//       <About />
//     </Provider>
//   )

//   wrapper.find('button').simulate('click')

//   expect(store.getActions()[0]).toEqual({
//     type: 'FAKE_ACTION'
//   })
// })

describe('Nav component', () => {

  const store = mockStore({
      portfolio: [{showModal: false}]
  })

  let router = ''

  const wrapper =  mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Provider store={store}>
        <Nav />
      </Provider>
    </MemoryRouter>
    )

  console.log('hello', wrapper, wrapper.find('img'))

  it('contains home', () => {
    console.log('hello', wrapper.find('nav'))
    expect(wrapper.find('nav').first().text().includes('Home')).toBe(true)
  })
})
