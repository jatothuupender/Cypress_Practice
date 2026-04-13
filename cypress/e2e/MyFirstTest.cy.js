
describe('My First Test', () => {

  it('Verify title negative', () => {
    cy.visit("https://web-uatv2.tajhotels.com/en-in/restaurants");
   cy.xpath("//span[normalize-space()='LOGIN / JOIN']").click()
   cy.await page.locator('span').filter({ hasText: 'LOGIN / JOIN' }).first()
  

    
  });

});