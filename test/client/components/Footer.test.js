import React from 'react'
import { shallow } from 'enzyme'
import './enzymeSetup'
import Footer from '../../../client/components/Footer'

describe('Footer', () => {
  const wrapper = shallow(<Footer />)

  it('it renders an email address', () => {
    expect(wrapper.find('p').at(0).text())
      .toEqual(expect.stringContaining('contactstorrens@gmail.com'))
  });

  it('renders a `/contact` link', () => {
    expect(wrapper.find('Link').prop('to')).toEqual('./contact')
  });

  it('it renders a copy right', () => {
    expect(wrapper.find('p').at(1).text())
      .toEqual(expect.stringContaining('2019 Steve Torrens'))
  });
})