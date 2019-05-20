import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import './enzymeSetup'
import About from '../../../client/components/About'
import './setup-dom'
import { showAbout, hideAbout } from '../../../client/actions/portfolio'

import {Provider} from 'react-redux'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

// jest.mock('../../client/actions/portfolio.js', () => ({
//   showAbout: () => ({
//     type: 'FAKE_ACTION'
//   }),
//   hideAbout: () => ({
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

test('About.jsx content is present', () => {
  const store = mockStore({
    portfolio: {aboutDisplay: true}
  })

  const wrapper = mount(
    <Provider store={store}>
      <About />
    </Provider>
  )

  console.log(wrapper)

  expect(wrapper.find('h2').first().text()).toBe('Who I am')
  expect(wrapper.find('div').children('p').first().text().includes('My name is Steve Torrens')).toBe(true)

})
