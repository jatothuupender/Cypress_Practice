describe('Login Page Test', () => {
  it('should login successfully', () => {
    cy.login('your_username', 'your_password'); // Replace with actual credentials
    cy.url().should('include', '/dashboard'); // Adjust assertion as needed
  });
});
