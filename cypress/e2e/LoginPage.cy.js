// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://web-uatv2.tajhotels.com/en-in')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('#loginBtn').click()
})