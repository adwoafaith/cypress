describe("check boxes demo", () =>{
    it('checkboxes site'), () =>{
        cy.visit("https://practice.expandtesting.com/checkboxes")
        cy.get("#checkbox1").should("be.visible")
        get("#checkbox2").should("be.visible")

        //checking the checkbox1
        cy.get("#checkbox1").check().should("be.checked")

        // //unselecting the checkbox1
        cy.get("#checkbox1").uncheck().should("not.be.checked")

        //selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        //selecting the first and the last check boxes
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()

    }
})