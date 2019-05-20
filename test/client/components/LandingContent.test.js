import React from 'react'
import { shallow } from 'enzyme'
import './enzymeSetup'
import LandingContent from '../../../client/components/LandingContent'

describe('LandingContent', () => {
  const wrapper = shallow(<LandingContent />)

  it('renders the `What I do` title', () => {
    expect(wrapper.find('h2').text()).toEqual('What I do')
  });

  it('renders a `/about` link', () => {
    expect(wrapper.find('Link').prop('to')).toEqual('./about');
  });

})