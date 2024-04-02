describe('xpath locator',() =>{

    it('Find number of items',() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get ("[type='submit']").click()
        cy.url().should('include', '/dashboard');
        cy.xpath('//div[@class="oxd-layout-context"]').should('have.length', 1)

    })
    it('chained xpath',() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get ("[type='submit']").click()
        cy.url().should('include', '/dashboard');
        cy.xpath('//div[@class="oxd-layout"]/div[@class="oxd-layout-context"]').should('have.length', 1);


    })
})