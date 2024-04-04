describe("navigate through pages", () =>{
    beforeEach('visit website',() =>{
        cy.visit("https://demo.nopcommerce.com/")
    })
    it('navigations', () =>{
        cy.title().should('eql','nopCommerce demo store') //home page

        //lets click on the cameras
        cy.clickLink("Computers")
    })
})