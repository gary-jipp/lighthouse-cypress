/* eslint-disable no-undef */

describe('test for the checkbox filters', ()=>{

  it('can uncheck the explicit checkbox', ()=>{
    cy.visit('http://localhost:8765/');

    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');

  })

  it('can check the EP checkbox by clicking on the label', ()=>{
    cy.visit('http://localhost:8765/');

    cy.contains("EP")
      .click();

    cy.get('#EP') 
      .should('be.checked') ;
  })

})