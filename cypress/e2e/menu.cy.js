describe('Menu Navigation on ParaBank', () => {
    it('should navigate to different pages via the menu', () => {
      // Visit the homepage
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  
      // Click on the About Us menu item
      cy.contains('About Us').click();
      // Assert that the About Us page is loaded
      cy.url().should('include', '/about.htm');
  
      // Click on the Services menu item
      cy.contains('Services').click();
      // Assert that the Services page is loaded
      cy.url().should('include', '/services.htm');
  
      // Click on the Contact menu item
      cy.contains('Admin Page').click();
      // Assert that the Contact page is loaded
      cy.url().should('include', '/admin.htm');
    });
  });
  