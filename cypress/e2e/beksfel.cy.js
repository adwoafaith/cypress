import Login from "../pageObjectModelFolder/beksfelLogin"

describe('testing the Beskful app', () =>{
    beforeEach('login',() =>{
       

    })
        
  context("signup", () =>{
    it.skip('register',() =>{
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
        cy.xpath("//body/div/div/div/div/div[1]/form[1]/div[1]/span[1]//*[name()='svg']").click()
        cy.get("input[placeholder='Confirm Password']").type('Mytesting055!')
   })
  })
 
    context("login session", () =>{
            it("login functionality", () =>{
                cy.visit('https://beksfel-app.netlify.app/')
                cy.fixture('beksfel').then((data) =>{
                    data.forEach((userdata) =>{
                        const myLogin = new Login();
                        myLogin.setUsername(userdata.username);
                        myLogin.SetPassword(userdata.password);
                        myLogin.ClickButton();
                        if (userdata.username === "codingfrancis100@gmail.com" & userdata.password === "Password@123"){
                            myLogin.VerifyDashboard()
                            
                            cy.wait(4000)
                            //verify details
                            let actualUser = 'Francis Owusu';
                            cy.get(".text-lg.font-semibold").then((e) =>{
                                let expectedUser = e.text()
                                expect(expectedUser).to.equal(actualUser)
                            })
                            cy.wait(3000);
                            myLogin.Logout()
                        }
                        else if (userdata.username === "codingfrancis100@gmail.com" && userdata.userdata!="Password@123"){
                            myLogin.verifyAlert("Email or password incorrect")
                            
                        }
                        else{
                            myLogin.verifyAlert("Email must be valid email")
                        }
                    })
                })        
               
            })
          
            
        
  
  })
    
   
    it.skip("validating the url's on the dashboard", ()=>{
        

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

    })
      context("verify dashboard", () =>{
        
    it("validating the url's on the dashboard", ()=>{
        

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

    })
      })
    })


