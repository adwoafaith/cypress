class Login {
    txtUsername = ".form-input[type='email']"
    txtPassword = "div[class='flex justify-center items-center absolute top-0 w-full md:w-[600px] h-full p-[25px] bg-[#ecf0f3] transition-all duration-[1250ms] z-[200] md:left-0'] input[placeholder='Password']"
    btnButton = "div[class='flex justify-center items-center absolute top-0 w-full md:w-[600px] h-full p-[25px] bg-[#ecf0f3] transition-all duration-[1250ms] z-[200] md:left-0'] button[class='auth-button']"
    btnVerify = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)"
    logout = "button[class='absolute bottom-0 p-7 flex justify-start items-center text-xl space-x-2 hover:text-blue-400'] span[class='text-base']"
    setUsername (username)
    {
       cy.get( this.txtUsername).type(username,{force:true})
    }

    SetPassword (password)
    {
        cy.get(this.txtPassword).type(password,{force:true})
    }
    ClickButton()
    {
        cy.get(this.btnButton).click({force:true})
    }
    VerifyDashboard()
    {
        cy.url().should("contain","https://beksfel-app.netlify.app/user-dashboard")
    }
    Logout()
    {
        cy.get(this.logout).click({force:true});
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