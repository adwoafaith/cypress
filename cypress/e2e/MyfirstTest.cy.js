describe('My first Test',function(){
    it ('verify title-positive', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')   
    })
    it ('verify title-negative', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')   
    })
})