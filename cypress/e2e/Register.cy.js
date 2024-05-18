describe('Registration Feature', () => {
    beforeEach(() => {
      // Visit the registration page
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    });
  
    it('should register with valid credentials', () => {
      // Fill in registration form
      cy.get('#customerForm input[name="customer.firstName"]').type('Yashu');
      cy.get('#customerForm input[name="customer.lastName"]').type('Subedi');
      cy.get('#customerForm input[name="customer.address.street"]').type('test');
      cy.get('#customerForm input[name="customer.address.city"]').type('New York');
      cy.get('#customerForm input[name="customer.address.state"]').type('NY');
      cy.get('#customerForm input[name="customer.address.zipCode"]').type('10001');
      cy.get('#customerForm input[name="customer.phoneNumber"]').type('1234567890');
      cy.get('#customerForm input[name="customer.ssn"]').type('123456789');
      cy.get('#customerForm input[name="customer.username"]').type('johndoe');
      cy.get('#customerForm input[name="customer.password"]').type('password123');
      cy.get('#customerForm input[name="repeatedPassword"]').type('password123');
  
      // Submit registration form
      cy.get('#customerForm input[type="submit"]').click();
  
      // Verify registration success
      cy.url().should('include', '/register.htm');
      cy.get('.title').should('contain', 'Welcome');
    });
  
    
  });