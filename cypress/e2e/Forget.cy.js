

describe('Forgot Password Feature', () => {
   

      
    
  // Fill in forgot password form with valid username
    it('Forget password', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(2) > a').click()
    cy.get('#firstName').type('asra')
    cy.get('#lastName').type('asra')
    cy.get('#lookupForm input[name="address.street"]').type('asra')
    cy.get('#lookupForm input[name="address.state"]').type('asra')
    cy.get('#lookupForm input[name="address.city"]').type('asra')
    cy.get('#lookupForm input[name="address.zipCode"]').type('asra')
    cy.get('#lookupForm input[name="ssn"]').type('asra')
      
    //   cy.get('input[name="username"]').type('john');
  
      // Submit the form
      cy.get('#lookupForm input[type="submit"]').click();
  
      // Verify success message displayed
      cy.get('.title').should('contain', 'Welcome');
    });
  
  });
  