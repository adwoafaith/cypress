describe("drop-down automation",() =>{
    it.skip("drop-down with select", () =>{
       cy.visit("https://www.zoho.com/commerce/free-demo.html")
       //if the dropdown has a selector component the we use
       //have.value
       cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
    })
    it.skip("drop-down with select", () =>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get("input[role='combobox']").type('Italy').type('{enter}')
        
        //checking if the value i am selecting is part of the drop down 
        //if the dropdown doesn't have selector component or element, then we use
        //have.text
        cy.get('#select2-billing_country-container').should('have.text','Italy')
     })

     it.skip("auto suggested drop-down", () =>{
        cy.visit("https://www.wikipedia.org/")
        
        // so with this code we are trying to type delhi in the input box
        cy.get("#searchInput").type('Delhi')

        //when the input box is being displayed, it has auto suggested name
        //also begining with a d or being similar to what we have tested
        // so we would have to capture all the listed options and pass
        // the actual word we are looking for into it
        //being delhi
        // with this the auto suggested ones are static
        //so if they are 5 they are 5
        cy.get(".suggestion-title").contains('Delhi').click()
        
     })
     it("dynamic drop-down", () =>{
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type("cypress automation")

        //after typing our query lets wait for a few seconds before we perform other options
        cy.wait(3000)
        
        //so we would have to get one common locator that will be able to 
        //capture all the options
        
        //we will use the keyword each 
        //because it is dynamic, contain will not always work for every
        //senario
        //it takes 3 parameters

        //1.list or an array (alll the elemets that are being captured)
        //2.index (every element in the array has an index, hence index)
        //3. actual element
        
        cy.get("div.wM6W7d>span").should("have.length",13)

        cy.get("div.wM6W7d>span").each(($el, index, $list) =>{
            if ($el.text =='cypress automation'){
                cy.wrap($el).click()
            }
        })
     
        //checking to see if the results provided will have the value we provided
        // in the search box
        cy.get("#APjFqb").should('have.value','cypress automation')
    
    })

}) 