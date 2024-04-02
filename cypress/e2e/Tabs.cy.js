//chain window

describe('handle tab-approaches',() =>{
    it('tabs approach1',() =>{
        cy.visit('https://the-internet.herokuapp.com/windows');//parent window/tab

        //in other not to open the application in a new tab
        //remove the attribute of the element before you perform the click action
        // on it
        cy.get(".example> a").invoke('removeAttr','target').click(); //removing and clicking on tab
        cy.url().should('eql','https://the-internet.herokuapp.com/windows/new');

        cy.wait(5000); 
        //going back to the parent tab
        cy.go('back'); // it will go back to the parent tab
    })
y
    it.only('tabs approach 2',() =>{
        cy.visit('https://the-internet.herokuapp.com/windows');//parent window/tab

        //get the href attribute of the other link
        cy.get('.example>a').then((e)=>{
            let url =e.prop('href');
            cy.visit(url);
        })
        cy.url().should('contain','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        cy.go('back');
    })
})