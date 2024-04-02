describe('Alerts', () =>{
    it.skip('Js alert', () =>{
        cy.visit("the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        
        //validating the test in the response message
        cy.on("window:alert",(t) =>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get("#result").should("have.text","You successfully clicked an alert")
    })

    //closing the alert window using the cancel button
    //because cypress will automatically close the window using the okay button
    it.skip('confirm alert', () =>{
        cy.visit("the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        
        //validaing the test in the alert window
        cy.on('window:confirm',(t) =>{
            expect(t).to.contains("I am a JS Confirm")
        })
           //validate the resuls
        cy.get("#result").should('have.text','You clicked: Ok')
    })

    //closing the alert button using the cancel button
    it.skip('confirm alert', () =>{
        cy.visit("the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        
        //validaing the test in the alert window
        cy.on('window:confirm',(t) =>{
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.on('window:confirm',() =>false); //cypress will close alert window using cancel button
        //validate the resuls
        cy.get("#result").should('have.text','You clicked: Cancel')
    })

    //js Prompt Alert :It will have some text with a text box for user input along with 'ok'

    it.skip('using js promt alert',() =>{
        cy.visit("the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click()

        //cypress will automatically close prompted alert - using ok button
       cy.get("#result").should('have.text','You entered: welcome');
       cy.get("#result").should('have.text','You entered: welcome');

        //closing window using cancel button
        //cy.on('window:prompt',()=>false);
        //cy.get("#result").should('have.text','You entered: welcome');

    })
      //authenticated Alert
      it.skip('authenticated alert',() =>{
        //approach1
        cy.visit('the-internet.herokuapp.com/basic_auth',{auth:
                                                            {
                                                            username:"admin",
                                                            password:"admin"
                                                            }   
                                                        } )

       cy.get("div[class='example'] p").should('have.contain',"Congratulations") 
    })
    
    //second approach
    it.only('authenticated alert',() =>{
        //approach1
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

       cy.get("div[class='example'] p").should('have.contain',"Congratulations") 
    })
})
