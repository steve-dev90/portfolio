import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import Nav from '../../client/components/Nav'
import { handleOpenModal } from '../../client/actions/portfolio'
import './setup-dom'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])

jest.mock('../../client/actions/portfolio.js', () => ({
  handleOpenModal: () => ({
    type: 'FAKE_ACTION'
  })
}))

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

test('Nav menus are present', () => {

  const wrapper = mount(
    <Provider store={store}>
      <Nav />
    </Provider>
  )

  expect(wrapper.find('h2').first().text()).toBe('Who I am')
  expect(wrapper.find('div').children('p').first().text().includes('My name is Steve Torrens')).toBe(true)

})
