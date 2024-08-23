describe('template spec', () => {
  // change date here
  const DATE = '25';
  // change number of people here
  const NUM_PPL = '4';
  // change to your own name and email
  const FIRST_NAME = 'FirstName';
  const LAST_NAME = 'LastName';
  const EMAIL = 'xxxx@gmail.com';

  // const FIRST_NAME = 'Another1';
  // const LAST_NAME = 'Another1';
  // const EMAIL = 'xxxxx@gmail.com';

  // const FIRST_NAME = 'Another2';
  // const LAST_NAME = 'Another2';
  // const EMAIL = 'xxxxx@gmail.com';

  it('load page', () => {
    cy.viewport(2000, 1750);
    cy.visit('https://reserve.bcparks.ca/dayuse');
    cy.get(`[aria-label="Book a pass for Joffre Lakes Provincial Park"]`).click();
    cy.get(`[title="Select a Date"]`).click();
    cy.get('.btn-light').contains(new RegExp("^" + DATE + "$", "g")).click();
    cy.get('#passType').select('Joffre Lakes - Trail');
    cy.get('.card-input').click();
    cy.get('#passCount').select(NUM_PPL);
    cy.get('.btn').contains('Next').click();
    cy.get('#firstName').type(FIRST_NAME);
    cy.get('#lastName').type(LAST_NAME);
    cy.get('#email').type(EMAIL);
    cy.get('#emailCheck').type(EMAIL);
    cy.get('[type="checkbox"]').check();
  })
})
