

describe('New Site', () => {

  it('Open the Site', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Username
    cy.get('#username').type('Admin')

    // Password
    cy.get('password').type('admin123')

    // Login button
    cy.get('button[type="submit"]').click()

  })

})