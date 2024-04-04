describe("navigate through pages", () =>{
    beforeEach('visit website',() =>{
        cy.visit("https://demo.nopcommerce.com/")
    })
    it.skip('navigations', () =>{
        cy.title().should('eql','nopCommerce demo store') //home page

        //lets click on the cameras
        cy.clickLink("Computers")

        //going back to the home page
        cy.go('back')

        //after going back we should get to the orignal or home page which is 
        cy.title().should('eql','nopCommerce demo store') //home page

        //getting back to the computers page
        cy.go('forward')
    })
    it('navigations', () =>{
        cy.title().should('eql','nopCommerce demo store') //home page

        //lets click on the cameras
        cy.clickLink("Computers")

        //going back to the home page
        cy.go(-1)

        //after going back we should get to the orignal or home page which is 
        cy.title().should('eql','nopCommerce demo store') //home page

        //getting back to the computers page
        cy.go(1)

        //reloading a browser
        cy.reload();
    })
})
