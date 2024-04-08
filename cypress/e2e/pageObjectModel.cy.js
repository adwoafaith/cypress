import Login from '../pageObjectModelFolder/loginPage'
import Login2 from '../pageObjectModelFolder/loginPage2'

describe("page object model", () =>{
    //normally this is it is being done
    beforeEach("visite website ", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
   it.skip("page object model demo", () =>{
    
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
  
   })
   it("page object model demo1", () =>{
    const myLogin = new Login();
    myLogin.setUserName("Admin")
    myLogin.setPassword('admin123')
    myLogin.clickSubmit()
    myLogin.verifyLogin()
   })
   it.skip("page object model demo2", () =>{
    const myLogin = new Login2();
    myLogin.setUserName("Admin")
    myLogin.setPassword('admin123')
    myLogin.clickSubmit()
    myLogin.verifyLogin()
   })

   //storing the credentials in the fixtures
 
   it.only("page object model demo2", () =>{
    cy.fixture('orangehrm3').then((data) =>{
        const myLogin = new Login2();
        myLogin.setUserName(data.username)
        myLogin.setPassword(data.password)
        myLogin.clickSubmit()
        myLogin.verifyLogin()
   })
    
   })
})