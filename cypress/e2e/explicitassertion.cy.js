describe('explicit assertion',() =>{
    it('my exlicity', () =>{
        //visit website
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //get username and password
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)").should('contain','Username')
        cy.get("input[placeholder='Password']").type('admin123')

        //validating the login button
        cy.get("button[type='submit']").click()

        //checking the user on the login page if the user is loggedin
        let expectedname = "Tran Anh";
        cy.get(".oxd-userdropdown-name").then(  (x) =>{

            //BDD style
            let actualName =  x.text()   
            expect(actualName).to.equal(expectedname)

            //tdd style
            assert.equal(actualName,expectedname)
            // assert.notEqual(actualName,expectedname)
        })
    })
})