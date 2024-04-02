describe('experiment', () =>{
    it('launch site', () =>{
        cy.visit('https://lazyjacks.co.uk/?gad_source=1&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW-f55LFSpecuYzrX3oVnooZSSvZGn6OSot0V8-4mXa3OY0JKdzac-YaAil4EALw_wcB')
        cy.get("img[alt='Lazy Jacks']").should('exist')

        //validating the search icon
        cy.get("#Search-In-Modal").should('not.be.visible')
        cy.xpath("//a").should('not.have.length',3)
        cy.get('svg').find('path').eq(0).click();
        cy.url().should('eq','https://lazyjacks.co.uk/cart')
        //cy.get("svg").click()
    })
})