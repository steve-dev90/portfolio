import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { shallow, mount } from 'enzyme'

import About from '../../client/components/About'
import './setup-dom'

import {Provider} from 'react-redux'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

jest.mock('../../client/actions/portfolio.js', () => ({
  showAbout: () => ({
    type: 'FAKE_ACTION'
  })
}))

test('About.jsx with no about text', () => {
  const store = mockStore({
    portfolio: [{aboutDisplay: false}]
  })

  const wrapper = mount(
    <Provider store={store}>
      <About />
    </Provider>
  )

  //expect(wrapper.find('button').text()).toBe('Show Greetings')

  expect(wrapper.find('h2').first().text()).toBe('About Me')

  // wrapper.find('button').simulate('click')
  // expect(store.getActions()).toHaveLength(1)
  // expect(store.getActions()[0]).toEqual({
  //   type: 'FAKE_ACTION'
  // })
})
