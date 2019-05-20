import React from 'react'
import { shallow } from 'enzyme'
import './enzymeSetup'
import { Nav } from '../../../client/components/Nav'

const props = {
  portfolio: [{ showModal: false }]
};

const mockHandleOpenModal = jest.fn();

describe('Nav', () => {

  // This will have to change if I go to mapDispatchToProps
  const wrapper = shallow(<Nav {...props} dispatch={mockHandleOpenModal} />)

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

    beforeEach(() => {
      wrapper.find('button').at(0).simulate('click');
    });

    // This doesn't test the handleOpenModal action - that would be an integration test
    // See https://hackernoon.com/unit-testing-redux-connected-components-692fa3c4441c
    it('the dispatch function has been called', () => {
      expect(mockHandleOpenModal.mock.calls.length).toBe(1)
    });
  })
})
