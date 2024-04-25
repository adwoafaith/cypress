const { response } = require("express")

describe("API testing", () =>{
    it.skip("passing simple json response", () =>{
        cy.request({
            method:"GET",
            url:"https://fakestoreapi.com/products"
        })
        .then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.equal(1)
            expect(response.body[1].title).to.eq("Mens Casual Premium Slim Fit T-Shirts ")
            expect(response.body[6].title).to.eq("White Gold Plated Princess")
            expect(response.body[7].rating.rate).to.eq(1.9)

        })

    })
    it("parsing complex json response and finding the total price of all the products",()=>{
        let totalPrices=0
        cy.request({
            method:"GET",
            url:"https://fakestoreapi.com/products?limit=5",
            qs:{limit:5}
        })
        .then((response) =>{
            // expect(response.status).to.equal(200)
            // expect(response.body[0].price).to.equal(109.95)
            const responseBody = response.body;
            const price = [];
            cy.log(responseBody)
            for (const myprice of responseBody){
                price.push(myprice.price)
            }
            cy.log(price)
            expect(price[1]).to.eq(22.3)
            expect(price).to.has.length(5)
            totalPrices = totalPrices + price;
           
        })
    })
})