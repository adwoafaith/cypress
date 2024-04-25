describe("API testing", () =>{
    const queryParam = {page:2};
    it('query parameters', () =>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users",
            qs:queryParam
        })
        .then((response) =>{
            expect(response.status).to.equal(200);

            // // //finding how many records in the data
            expect(response.body.page).equal(2)
            cy.log(response.body.data)
            expect(response.body.data).to.have.length(6)
            expect(response.body.data[0].first_name).equal("Michael")
            expect(response.body.data[0].last_name).equal("Lawson")
             
        })
    })
})
