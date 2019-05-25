import * as actions from '../../../client/actions/portfolio';

describe('portfolio', () => {
  it('creates an action to show the contact form', () => {
    const expectedAction = { type: 'SHOW_CONTACT_FORM' };
    expect(actions.showContactForm()).toEqual(expectedAction);
  });

  it('creates an action to hide the contact form', () => {
    const expectedAction = { type: 'HIDE_CONTACT_FORM' };
    expect(actions.hideContactForm()).toEqual(expectedAction);
  });

  it('creates an action to open the modal', () => {
    const expectedAction = { type: 'OPEN_MODAL' };
    expect(actions.handleOpenModal()).toEqual(expectedAction);
  });

  it('creates an action to close the modal', () => {
    const expectedAction = { type: 'CLOSE_MODAL' };
    expect(actions.handleCloseModal()).toEqual(expectedAction);
  });
})
