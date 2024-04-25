
describe("API testing", () =>{
    let authToken = null;
    before("creating access token", () =>{
        const requestBody = {
            clientName: Math.random().toString(5).substring(2),
            clientEmail: Math.random().toString(2).substring(2)+"@gmail.com"   
        }

       cy.request({
        method:"POST",
        url:"https://simple-books-api.glitch.me/api-clients/",
        headers:{'Content-Type':'application/json'},
        body:requestBody
       }) 
       .then((response) =>{
        authToken = response.body.accessToken;
       });
    })
    before("creating an order", () =>{
        const requestBody ={
            bookId :1,
            customerName :Math.random().toString(3).substring(2) 
        }
        cy.request({
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ authToken
            },
            url:"https://simple-books-api.glitch.me/orders/",
            body:requestBody
        })
        .then((response) =>{
            expect(response.status).to.equal(201)
            expect(response.body.created).to.eq(true)
        })
    })
    it ("Fetch all the request", () =>{
        cy.request({
            method:"GET",
            url:"https://simple-books-api.glitch.me/orders/",
            headers:{
                "Content-Type":'application/json',
                'Authorization':'Bearer '+ authToken
            },
            cookies:{
                'cookieName':'mycookies'
            }
        })
        .then((response) =>{
            expect(response.status).equal(200);
            //validating how may orders we have created
            expect(response.body).have.length(1);
        })
    })
})