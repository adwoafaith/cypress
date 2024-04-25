describe("My first documentation Test", () =>{
    it("deos not do much", () =>{
        expect(true).to.equal(true)
        cy.visit("https://example.cypress.io")
        
        //checking the existence of the type component and clicking on it
        cy.contains("type").click()
        cy.url().should('include','/commands/actions')

        //type an element into the email box and verify if you typed the right email
        cy.get("input[type='email']").type('adwoafaith49@gmail.com').should("have.value","adwoafaith49@gmail.com")
     

    })
})