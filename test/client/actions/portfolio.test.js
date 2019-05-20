import * as actions from '../../../client/actions/portfolio';

describe('portfolio', () => {
  it('creates an action to show the contact form', () => {
    const expectedAction = { type: 'SHOW_CONTACT_FORM' };
    expect(actions.showContactForm()).toEqual(expectedAction);
  });
})
