
describe('My First Test', () => {

  it('Verify title positive', () => {
    cy.visit("https://web-uatv2.tajhotels.com/en-in/restaurants");
    cy.title().should('not eq', 'A Culinary Legacy');

  });

  it('Verify title negative', () => {
    cy.visit("https://web-uatv2.tajhotels.com/en-in/restaurants");
    cy.title().should('eq', 'A Culinary Legacy123');
    cy.contains('LOGIN / JOIN').click()
    
  });

});