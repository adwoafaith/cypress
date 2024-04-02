describe("MyTestSuit",() =>{
    it('fixturesDemoTest', () =>{
      cy.wait(70000)
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
      cy.wait(70000)
      cy.fixture('orangehrm').then((data) =>{

          cy.get("input[placeholder='username']").type(data.username);
          cy.get("input[placeholder='password']").type(data.password);
          cy.get("[type='submit']").click()
          cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected)
      })

    }) 
})