require('cypress-drag-drop')
describe("mouse operations",() =>{
    it.skip('mousehover',() =>{
        cy.visit("https://demo.opencart.com/")

        //the elements shouldn't be visible
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').
        should('not.be.visible');
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").
        should('not.be.visible');
        //trigger is used to perform mousehover
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        //after the moverover the element should be visible
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').
        should('be.visible');
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").
        should('be.visible');

    })
    it.skip("right click action approach1", () =>{
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get("[class='context-menu-one btn btn-neutral']").trigger('contextmenu')
        cy.get("[class='context-menu-item context-menu-icon context-menu-icon-edit']").should('be.visible')
        cy.get("[class='context-menu-item context-menu-icon context-menu-icon-cut']").should('be.visible')
        cy.get("[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('be.visible')
        cy.get("[class='context-menu-item context-menu-icon context-menu-icon-paste']").should('be.visible')
        cy.get("[class='context-menu-item context-menu-icon context-menu-icon-delete']").should('be.visible')
        cy.get("[class='context-menu-item context-menu-icon context-menu-icon-quit']").should('be.visible')
    })
    it.skip("right click action approach2",() =>{
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get("[class='context-menu-one btn btn-neutral']").rightclick();
    })

    it.skip("double click action", () =>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_env_ondbclick3")
        //we can either use the trigger method of the doubleclick() methond
        cy.get('get an  element. at the moment i dont have the website').dbclick()

    })
    it.skip("drag and drop using plugin", () =>{
        //use of a plugin
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box2").drag("#box106",{force:true})
    })

    it("scrolling a page", () =>{
        cy.visit("http://countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(21) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(21) > :nth-child(1) > img').should('be.visible')

        //scrolling up 
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')

        //scrolling to the end
        cy.get("#footer").scrollIntoView({duration:2000})
    })

})