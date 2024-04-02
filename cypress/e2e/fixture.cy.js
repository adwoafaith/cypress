describe("MyTestSuit",() =>{
    // it('fixturesDemoTest', () =>{
    //   cy.wait(70000)
    //   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
    //   cy.wait(70000)
    //   cy.fixture('orangehrm').then((data) =>{

    //       cy.get("[placeholder='Username']").type(data.username);
    //       cy.get("[placeholder='Password']").type(data.password);
    //       cy.get("[type='submit']").click()
    //       cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected)
    //   })

    // }) 

    let userdata;
    before(() =>{
        //cy.wait(70000)
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
        //cy.wait(70000)
        cy.fixture('orangehrm').then((data) =>{
            userdata=data;
        })
    })

    it('fixturedata',() =>{
        cy.get("[placeholder='Username']").type(userdata.username);
        cy.get("[placeholder='Password']").type(userdata.password);
        cy.get("[type='submit']").click()
    })
})