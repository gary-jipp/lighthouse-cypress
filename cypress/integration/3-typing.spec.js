/* eslint-disable no-undef */

describe('test for the checkbox filters', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input.radius')
      .as('inputField');
  });

  it('can uncheck the explicit checkbox', () => {

    cy.get('@inputField')
      .type('Queen', { delay: 250 });
  });

  it('can uncheck the explicit checkbox', () => {

    cy.get('@inputField')
      .type('Beee{backspace}ge{backspace}{backspace}Gees', { delay: 250, parseSpecialCharSequences: true });
  });

});