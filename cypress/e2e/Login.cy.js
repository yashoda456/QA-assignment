// cypress/integration/login.spec.js

describe('Login Feature', () => {
    beforeEach(() => {
      // Visit the login page
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });
  
    it('should login with valid credentials', () => {
      // Fill in login form
      cy.get('input[name="username"]').type('asra');
      cy.get('input[name="password"]').type('asra{enter}');
  
      // Verify login success
      cy.contains('Accounts Overview').should('be.visible')
      
    });
  
    it('should display error message with invalid credentials', () => {
      // Fill in login form with invalid credentials
      cy.get('input[name="username"]').type('invalid_username');
      cy.get('input[name="password"]').type('invalid_password{enter}');
  
      // Verify error message displayed
      cy.get('.error').should('contain', 'Error');
     
    });
  
    
   });
  