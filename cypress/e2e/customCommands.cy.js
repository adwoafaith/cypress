//clicking on link using label
//over writing existing command like(contains() command) or ignoring the cases of letters either capital or lowercase
//re-usable custom command

describe('custom commands', () =>{
    beforeEach(() =>{
        cy.visit("https://demo.nopcommerce.com/")
    })
    it.skip('handling links', () =>{
        cy.visit("https://demo.nopcommerce.com/")
        
        //direct approach without using custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        
        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").contains("Apple MacBook Pro 13-inch")
    })

    //eg causing it not to be case sensitive
    it.only('overwriting existind commands', () =>{
        
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get("div[class='product-name'] h1").contains("Apple MacBook Pro 13-inch")
    })
})
