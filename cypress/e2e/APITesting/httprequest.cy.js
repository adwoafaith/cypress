describe("HTTP requests", () =>{
    it("Get request",() =>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)
    })
    it("Post call", () =>{
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:{
                title:"Test post",
                body:"This is my post call with cypress",
                userId:10
            }
        })
        .its('status')
        .should('equal',201)
    })
    it("Put call",() =>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title:"Test put - updated",
                body:"This is my put call with cypress",
                userId:10,
                id:1
            }
        })
        .its('status')
        .should('equal',200)
    })

    it("delete call", () =>{
        cy.request({
            method:'DELETE',
            url:"https://jsonplaceholder.typicode.com/posts/1"
        })
        .its('status')
        .should('equal',200)
    })
})