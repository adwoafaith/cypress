describe('my locators',() =>{
    it('check locator', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php') 
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        //cy.get("[placeholder='Password']").type("admin123")
        cy.get ("[type='submit']").click()
        cy.url().should('include', '/dashboard');
         })
})