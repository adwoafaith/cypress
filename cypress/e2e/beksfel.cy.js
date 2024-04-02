describe('testing the Beskful app', () =>{
    it('beskyaccess', () =>{
        cy.visit('https://beksfel-app.netlify.app/')

        //checking for logo
        cy.get("[alt='brand-logo']").should('be.visible')
        .and('exist')

        //verify the registration page
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > h2:nth-child(1)").should('contain','Hello')
        cy.get(".auth-button.switch-btn").click()
        cy.get("input[placeholder='Firstname']").type('adwoa')
        cy.get("input[placeholder='Surname']").type('buabin')
        cy.get("input[placeholder='Email'][type='text']").type('adwoafaith49@gmail.com')
        cy.get("div[class='relative flex justify-center items-center md:absolute top-0 w-auto md:w-[600px] h-full bg-[#ecf0f3] transition-all duration-[1250ms] z-[100] md:left-[calc(100%-600px)]'] input[placeholder='Password']").type('Mytesting055!')
        cy.get("input[placeholder='Confirm Password']").type('Mytesting055!')

        //verify the login page
        cy.xpath("//button[@class='auth-button switch-btn']").click()
        cy.get("input[placeholder='Email'][type='email']").type('adwoafaith49@gmail.com')
        cy.get("div[class='flex justify-center items-center absolute top-0 w-full md:w-[600px] h-full p-[25px] bg-[#ecf0f3] transition-all duration-[1250ms] z-[200] md:left-0'] input[placeholder='Password']").type('Mytesting055!')
        cy.get("div[class='flex justify-center items-center absolute top-0 w-full md:w-[600px] h-full p-[25px] bg-[#ecf0f3] transition-all duration-[1250ms] z-[200] md:left-0'] button[class='auth-button']").click()

        //verifying the link after login button has been created
        cy.url().should('contain',"/user-dashboard")

        //validating if the user faith buabin is routed to the correct page
        
        let  correctName = "adwoa buabin"
        cy.get(".text-lg.font-semibold"). then( (x) =>{
            let Namepresent = x.text()
            expect(Namepresent).to.equal(correctName)

        })
        
        //validating the forgot password functionality


        //validating the dashboard
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)").should('contain','Dashboard')

        //validating the existance of the logo
        cy.get("img[alt='brand-logo'][loading='lazy'][width='120']").should('be.visible')
        .and('exist')

        //validating the invoice button
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)").should('contain','Invoice')
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)").click()
        cy.url().should('contain','https://beksfel-app.netlify.app/invoice/me')

        //validate the edit profile element
        
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)").should('contain',"Edit Profile")
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)").click()
        cy.url().should('contain','https://beksfel-app.netlify.app/edit-profile')


        //go back to the home page
        cy.wait(7000)
        cy.go('back')
    })

})
