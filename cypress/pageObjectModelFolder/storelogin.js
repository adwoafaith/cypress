class Login
{
    txtusername = "#login2";
    Mypassword = "#loginpassword";
    MyloginBtn = "button[onclick='logIn()']"

    setUsername(username)
    {
        cy.get(this.txtusername).type(username,{ force: true })
    }
    setPassword(password)
    {
        cy.get(this.Mypassword).type(password,{ force: true })
    }
    setButton()
    {
        cy.get(this.MyloginBtn).click({ force: true });
    }
    verifyLogin()
    {
        cy.get("li[class='nav-item active'] a[class='nav-link']").should("be.visible").and("exist")
    }
    verifyLogout()
    {
        cy.get("#logout2").click({force:true})
    }
    verifyAlert(message)
    {
        cy.on("window:alert",(alertMessage) =>{
            if (!alertMessage.includes(message)) {
                expect(alertMessage).to.eq(message);
            }
        })
    }
}

export default Login;