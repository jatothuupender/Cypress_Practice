/// <reference types="cypress" />

describe('New Site', () => {

  it('Open the Site', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Username
    cy.get('input[name="username"]').type('Admin')

    // Password
    cy.get('input[name="password"]').type('admin123')

    // Login button
    cy.get('button[type="submit"]').click()

  })

})