//clicking on link using label
//over writing existing command like(contains() command) or ignoring the cases of letters either capital or lowercase
//re-usable custom command

describe('custom commands', () =>{
    beforeEach(() =>{
        cy.visit("https://demo.nopcommerce.com/")
    })
    it.skip('handling links', () =>{        
        //direct approach without using custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        
        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        //cy.get("div[class='product-name'] h1").contains("Apple MacBook Pro 13-inch")
    })

    it.skip('handling links', () =>{

        //direct approach without using custom command        
        //using custom command
        
        cy.clickLink("APPLE MACBOOK PRO 13-inch").should('be.visible')
        cy.get("div[class='product-name'] h1").should('have',"APPLE MACBOOK PRO 13-inch")
    })
    
    it.only('create a custom login', ()=>{
        cy.clickLink('Log in')
        cy.login_command("adwoafaith49@gmail.com","demoapp")
    })
})
