/* eslint-disable no-undef */
describe('tests to see if Cypress is working', () => {

  it('can run', () => {
    assert.equal(true, true);
  });

  it('can visit the web page', () => {
    cy.visit('/');
  });

});