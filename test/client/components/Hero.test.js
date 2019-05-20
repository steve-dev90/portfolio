import React from 'react'
import { shallow } from 'enzyme'
import './enzymeSetup'
import Hero from '../../../client/components/Hero'

describe('Hero', () => {
  const wrapper = shallow(<Hero />)

  it('renders the `Steve Torrens` title', () => {
    expect(wrapper.find('h2').text()).toEqual('Steve Torrens')
  });

  it('renders the down arrow link', () => {
    expect(wrapper.find('Link i').exists()).toBe(true)
  });
})