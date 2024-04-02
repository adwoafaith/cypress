//import { beforeEach } from "mocha"

describe("MyTestSuit", () =>{
    //before hook- before hook will execute just ones after you execute your it blocks
    //after hook -after hook will execute once after you are done executing your it blocks
    //beforeEach - beforeEach will execute everytime you want to execute your it block
    //AfterEach- aftereach execcutes multiple times after executing of your it blocks

    //assuming we are testing just one application and we only visits a site once
    //we use the before hook
    before(() =>{
        cy.log('*********launching of application*********')
    })

    //after executing your it block you want to close your application
    // in this case you use the after hook
    after(() =>{
        cy.log("******close app*********")
    })

    beforeEach(() =>{
        cy.log("******** login*********")
    })

    afterEach(() =>{
        cy.log("*********Logout*********")
    })
    it("search",() =>{
        cy.log("**searching *****")
    })
    it("advanced search",() =>{
        cy.log("**advansed searching *****")
    })
    it("login searching",() =>{
        cy.log("**login searching *****")
    })
})