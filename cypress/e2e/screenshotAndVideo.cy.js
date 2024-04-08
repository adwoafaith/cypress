describe("screenshots and videos", () =>{
    beforeEach("visit website", () =>{
        cy.visit("https://demo.opencart.com/")
    })
    it.skip("screenshots", () =>{
        cy.screenshot('homepage')
        //capture the logo
        cy.get("img[title='Your Store']").screenshot("logo")

         })
     it.only("automatic screenshot and video taking using cLI", () =>{
        //capturing a screenshot automatically when a failure happens
        // and video- only when you execute through cli
         cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click(); 
         cy.get("div[id='content'] h2").should("have.text",'Cameras');  
     })    
})