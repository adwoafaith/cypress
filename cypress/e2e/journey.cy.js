describe("journey app", () => {
    
    it.skip('features', () => {
        cy.visit("https://scts.amalitech-dev.net/auth/signup?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkd29hZmFpdGg0OUBnbWFpbC5jb20iLCJleHAiOjE3MTE2MTQ3NDksImlzcyI6Imh0dHBzOi8vc2N0cy5hbWFsaXRlY2gtZGV2Lm5ldC8iLCJhdWQiOiJodHRwczovL3NjdHMuYW1hbGl0ZWNoLWRldi5uZXQvIn0.ju4MjnSivxGzAod5GFqEtF2mMGi8Hr5xn4DMHJjD8ho")
        cy.get("body > app-root:nth-child(1) > app-auth:nth-child(3) > app-signup:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > app-input:nth-child(2) > div:nth-child(1) > p:nth-child(2)").type("adwoafaith")
        cy.get("#password").type("Mypassword123&&&");
        cy.get("#confirmPassword").type("Mypassword123&&&")
        cy.get("input[type='checkbox']").check().should("be.checked")
        cy.get("body > app-root:nth-child(1) > app-auth:nth-child(3) > app-signup:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > p:nth-child(6) > app-button:nth-child(1) > button:nth-child(1)").click();

    });

    it.only('Login', () => {
        cy.visit("https://scts.amalitech-dev.net/auth/sign-in")
        cy.get("#text").type('adwoafaith49@gmail.com');
        cy.get("#password").type('Mypassword123&&&')
        cy.get("[type='checkbox']").check().should('be.checked')
        cy.get("body > app-root:nth-child(1) > app-auth:nth-child(3) > app-sign-in:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > p:nth-child(4) > app-button:nth-child(1) > button:nth-child(1)").click();
    
        cy.url().should('contain','https://scts.amalitech-dev.net/dashboard')

        let expectedUser='adwoafaith';
        cy.get("a[class='hover:text-primary text-mainDark text-[20px] capitalize font-medium lg:hover:fill-[#760B5E] block']").then((e) => {
            let actualname = e.text()
            expect(actualname).to.equal(expectedUser)
        })

        cy.xpath("//button[@class='flex items-center gap-3']").click()

        cy.xpath("//button[@class='flex items-center gap-3']").should('be.visible')

        cy.get("a[routerlink='articles']").click({force:true})
        cy.url().should('contain','https://scts.amalitech-dev.net/dashboard/articles')
        cy.get("#search").type('AT');

        cy.get("a[routerlink='machines']").click({force:true})
        cy.url().should('eq','https://scts.amalitech-dev.net/dashboard/machines')

        cy.get("a[routerlink='products']").click({force:true})
        cy.url().should('eq','https://scts.amalitech-dev.net/dashboard/products')

        cy.get("a[routerlink='suppliers']").click({force:true});
        cy.url().should('eq','https://scts.amalitech-dev.net/dashboard/suppliers')

        cy.get("a[routerlink='packages']").click({force:true});
        cy.url().should('contain','https://scts.amalitech-dev.net/dashboard/packages')

        cy.get("a[routerlink='production-orders']").click({force:true});
        cy.url().should('eq','https://scts.amalitech-dev.net/dashboard/production-orders')

        cy.get("a[routerlink='users']").click({force:true})
        cy.url().should('contain','https://scts.amalitech-dev.net/dashboard/users')

        cy.wait(5000)
        cy.xpath("//*[contains(text(),'Active Users')]").click()

        cy.get("table>tbody>tr").should('have.length','6')
        cy.get('table>thead>tr>th').should('have.length','7')

        cy.get("table>tbody>tr:nth-child(3)").should('contain','adwoafaith49@gmail.com')
        cy.get("table>tbody>tr:nth-child(3)>td:nth-child(2)").should('contain','adwoafaith49@gmail.com')

        cy.get("#search").type('clara')

        cy.get("tbody tr:nth-child(1) td:nth-child(1)").contains('clara').click();

        cy.xpath("//*[contains(text(),'Pending Users')]").click();
    });

    it.skip('forgot password', () => {
        cy.visit("https://scts.amalitech-dev.net/auth/sign-in")
        cy.get(".text-secondary").click()

        cy.url().should('eq','https://scts.amalitech-dev.net/auth/forgot-password')

        cy.get("img[class='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[80px] 2xl:h-[80px] mx-auto mb-[20px]']").should('be.visible').and('exist')

        cy.get("p[class='text-center text-[18px] lg:text-[25px] 2xl:text-[32px] 2xl:py-4 font-semibold']").should('contain',"Forgot Password")
        
        cy.get("#email").type('adwoafaith49@gmail.com')
        cy.get("button[type='submit']").click()
    });
});
