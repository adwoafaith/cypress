describe('My first Test',function(){
    it ('verify title-positive', () =>{
        cy.wait(6000)
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')   
    })
    it ('verify title-negative', () =>{
        cy.wait(6000)
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')   
    })
})