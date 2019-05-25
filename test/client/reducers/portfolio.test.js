import portfolio from '../../../client/reducers/portfolio';

const state = {
  contactFormDisplay : true,
  showModal : false
}

describe('portfolio', () => {
  it('contact form display toggle true', () => {
    let expectedState = {"aboutDisplay": undefined, "contactDisplay": undefined, "contactFormDisplay": true, "projectsDisplay": undefined}
    expect(portfolio(state, { type: 'SHOW_CONTACT_FORM' })).toEqual(expectedState);
  });

  it('contact form display toggle false', () => {
    let expectedState = {"aboutDisplay": undefined, "contactDisplay": undefined, "contactFormDisplay": false, "projectsDisplay": undefined}
    expect(portfolio(state, { type: 'HIDE_CONTACT_FORM' })).toEqual(expectedState);
  });

  it('open modal toggle true', () => {
    let expectedState = {"showModal": true, "contactFormDisplay": true }
    expect(portfolio(state, { type: 'OPEN_MODAL' })).toEqual(expectedState);
  });

  it('contact form display toggle true', () => {
    let expectedState = {"showModal": false, "contactFormDisplay": true }
    expect(portfolio(state, { type: 'CLOSE_MODAL' })).toEqual(expectedState);
  });
})