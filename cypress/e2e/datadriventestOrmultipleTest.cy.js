describe("Datadriven test", () =>{
    it("datadriven", () =>{
        cy.fixture('orangehrm2').then((data) =>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
             data.forEach((userdata) =>{
                 cy.get("[placeholder='Username']").type(userdata.username)
                 cy.get("[placeholder='Password']").type(userdata.password)
                 cy.get("[type='submit']").click()

                 if (userdata.username ==='Admin' && userdata.password ==='admin123'){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)
                    
                    //log out so you can get the credentials of the next data
                    cy.get(".oxd-userdropdown-name").click()
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").should('be.visible').click({force:true})
                 }
                 else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected)
                 }
             })
        })
    })
})