describe("radio button automation", () =>{
    it("radio button", () =>{
        //checking the visibility of the radio buttons
        cy.visit("https://practice.expandtesting.com/radio-buttons")
        cy.get("#basketball").should("be.visible")
        cy.get("#football").should("be.visible")
        cy.get("#tennis").should("be.visible")

        //checking te baseball button and unchecking the others
        cy.get("#basketball").check().should("be.checked")
        cy.get("#football").should("not.be.checked")
        cy.get("#tennis").should("not.be.checked")

         //checking the football button and unchecking the others
        cy.get("#football").check().should("be.checked")
        cy.get("#basketball").should("not.be.checked")
        cy.get("#tennis").should("not.be.checked")

        //checking the tennis button and unchecking the others
        cy.get("#tennis").check().should("be.checked")
        cy.get("#basketball").should("not.be.checked")
        cy.get("#football").should("not.be.checked")

        //checking the check boxes
        cy.visit("https://practice.expandtesting.com/checkboxes")
        cy.get("#checkbox1").should("be.visible")
        cy.get("#checkbox2").should("be.visible")

        // //selecting single check box
        cy.get("#checkbox1").check().should("be.checked")

        // //unselecting the checkbox1
        cy.get("#checkbox1").uncheck().should("not.be.checked")

        //selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        //selecting the first and the last check boxes
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()

    })

    // it('checkboxes site'), () =>{
    //     cy.visit("https://practice.expandtesting.com/checkboxes")
    //     cy.get("#checkbox1").should("be.visible")
    //     cy.get("#checkbox2").should("be.visible")
    // }
})