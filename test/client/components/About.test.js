import React from 'react'
import { shallow } from 'enzyme'
import './enzymeSetup'
import About from '../../../client/components/About'

describe('About', () => {
  const wrapper = shallow(<About />)

  it('renders the `Who I am` title', () => {
    expect(wrapper.find('h2').first().text()).toBe('Who I am')
  })

  it('renders the Who I am paragraph correctly', () => {
    expect(wrapper.find('div').children('p').first().text().includes('My name is Steve Torrens')).toBe(true)
  })
})