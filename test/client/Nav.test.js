import React from 'react'
import { shallow } from 'enzyme'
import './enzymeSetup'
import { Nav } from '../../client/components/Nav'

const props = {
  portfolio: [{ showModal: false }]
};

describe('Nav', () => {

  const wrapper = shallow(<Nav {...props} />)

  it('renders`Steve Torrens`', () => {
    expect(wrapper.find('h1').text()).toEqual('Steve Torrens')
  });

  it('renders a `/Home` link', () => {
    expect(wrapper.find('Link').at(0).prop('to')).toEqual('./');
  });

  it('renders a `/Home` link', () => {
    expect(wrapper.find('Link').at(1).prop('to')).toEqual('./projects');
  });

  it('renders a `/Home` link', () => {
    expect(wrapper.find('Link').at(2).prop('to')).toEqual('./about');
  });

  it('renders a `/Home` link', () => {
    expect(wrapper.find('Link').at(3).prop('to')).toEqual('./contact');
  });

  describe('when clicking on the burger', () => {

    console.log('HELLO', props.portfolio)

    beforeEach(() => {
      wrapper.find('Button').at(0).simulate('click');
    });

    // afterEach(() => {
    //   wrapper.setState({ portfolio: [{showModal: false}] });
    // });

    it('shows the nav modal', () => {
      console.log('HELLO', wrapper.state())
      expect(wrapper.state().portfolio.showModal).toBe(true);
    });
  })
})
