import Login from '../pageObjectModelFolder/storelogin'
require('dotenv').config()
describe("store app", () =>{
    beforeEach("visit website", () =>{
        cy.visit("https://demoblaze.com/index.html");
    })
    context("Login page",() =>{
        it("login functionality", () =>{
            cy.fixture('store').then ((data) =>{
                data.forEach((userdata) =>{
                    const myLogin = new Login();
                    myLogin.setUsername(userdata.username);
                    myLogin.setPassword(userdata.password);
                    myLogin.setButton();
                    if (userdata.username === 'pavanol'&& userdata.password === 'test@123'){
                        myLogin.verifyLogin()
                        myLogin.verifyLogout();
                    }
                    else if (userdata.username ==='pavonol' && userdata.password!='test@123'){
                        myLogin.verifyAlert("Please fill out Username and Password.");
                    }
                    // else if (userdata.password ==='test@123' && userdata.username!='pavanol')
                    // {
                    //     myLogin.verifyAlert("wrong username")
                    // }
                    else
                    {
                        myLogin.verifyAlert("Please fill out Username and Password.")
                    }
                })

                
            }) 
        })
5
    })
    context("home page", () =>{
        it ("contact page verification", () =>{
            cy.get("a[data-target='#exampleModal']").click({force:true})
            //verifying the existance of the contact email 
            cy.get("#recipient-email").should("exist").type("testing@gmail.com",{force:true})
            cy.get("#recipient-name").should("exist").type("adwoa",{force:true})
            cy.get("#message-text").should("exist").type("hello there i'm currently using your platform",{force:true})
            cy.get("[onclick='send()']").click({force:true})

            //verifing the pop up message after you click on the send message button
            cy.on('window:confirm',(t) =>{
                expect(t).to.contains("Thanks for the message!!")
            })

        })

        it("verifying the Cart functionality", () =>{
            cy.get("#cartur").click({force:true})
            cy.url().should("contain","https://demoblaze.com/cart.html");
            cy.get("div[class='col-lg-8'] h2").should("contain",'Products')
            cy.get("div[class='col-lg-1'] h2").should("contain","Total")

            //verifying place order functionality
            cy.get(".btn.btn-success").click({force:true});
            cy.get("#orderModalLabel").should("exist");
            cy.get("#totalm").should('exist');
            cy.get("#name").should('exist')
            cy.get("#country").should('exist')
            cy.get("#city").should('exist')
            cy.get("#card").should('exist')
            cy.get("#month").should('exist')
            cy.get("#name").should('exist')
            cy.get("#year").should('exist')

            //verifying the input boxes in the cart functionality
            cy.Cart("#name").type("berries")
            cy.Cart("#country").type("berries")
            cy.Cart("#city").type("california")
            cy.Cart("#card").type("12323")
            cy.Cart("#month").type("berries")
            cy.Cart("#year").type("berries")
            cy.get("[onclick='purchaseOrder()']").click();

            //verifying the alert message
            // wait for the alert to appear
            cy.window().then((win)=>{
                cy.stub(win,'prompt').returns('Thank you for your purchase');
            })

        })
        it("verify items", () =>{
            cy.get("a[id='nava'] img").should("exist")
           cy.myItems().should('be.visible').find('a').eq(4).click()
           cy.url().should('contain','https://demoblaze.com/prod.html?idp_=3')
           
           //verifying the phone functionality


        })
    })
})