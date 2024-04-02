describe('assertions demo',() =>{
    it("implicit assertion",() =>{

        //write the codes
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
        // cy.url().should('include','demo.orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','index.php')

        //different approach

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
        // cy.url().should('include','demo.orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','index.php')

        //another option
       
        // cy.url().should('include','demo.orangehrmlive.com')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('contain','index.php')
        
        //another option

          cy.url().should('include','demo.orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','adwoaberries')

        //capturing the title
        cy.title().should('include','Orange')
        .and('eql','OrangeHRM')
        .and('contain','HRM')
        //cy.get('.orangehrm-login-forgot > .oxd-text').click()

        //checking the presence of a logo and its visibility
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        //checking total number of linkes
        cy.xpath("//a").should('have.length','5')

        //provide a value in the text box
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type("admin123")
        
    })
})