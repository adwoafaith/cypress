import { response } from "express"

describe("api testing", () =>{
    it.skip("approach1-hard coded data", () =>{
        const requestBody = {
            name : "Mike",
            email : "john123@gmail.com",
            password: 'Paris123'
        }
        cy.request({
            method:"POST",
            url:"http://localhost:8000/items/add",
            body:requestBody
        })
        .then((response) =>{
            cy.log("response body:",response.body)
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("employee created successfully")
            expect(response.body.employee.name).to.equal("Mike")
    })

})
    it.skip("approach2- dynamically generating json objects",() =>{
        const requestBody = {
            name: Math.random().toString(3).substring(2),
            email:Math.random().toString(3).substring(2)+'gmail.com',
            password: Math.random().toString(6).substring(2)
        }

        cy.request({
            method:"POST",
            url:"http://localhost:8000/items/add",
            body: requestBody
        })
        .then((response) =>{
            cy.log("response body:",response.body)
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("employee created successfully")
            expect(response.body.employee.email).to.equal(requestBody.email)
            expect(response.body.employee.name).to.equal(requestBody.name)
        })
})
    it.only("approach3 using fixture", () =>{

     cy.fixture('APItestingThirdapproach').then((userdata) =>{
        const requestBody = userdata;
        cy.request({
            method:"POST",
            url:"http://localhost:8000/items/add",
            body: requestBody
        })
        .then((response) =>{
            cy.log("response body:",response.body)
            //validating the value of the property
            expect(response.status).to.equal(200)
            expect(response.body.employee.email).to.equal(requestBody.email)
            expect(response.body.employee.name).to.equal(requestBody.name)

            //valdate the property itself
            expect(response.body.employee).has.property('email',requestBody.email)
            expect(response.body.employee).to.have.property('name',requestBody.name)
      
    })
     })
   

})
   
})