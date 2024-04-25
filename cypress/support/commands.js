// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

// const { filter } = require("cypress/types/bluebird");
// const { text } = require("express");

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })


  //custom command for clicking on link using label

  Cypress.Commands.add('clickLink',(label) =>{
    cy.get('a').contains(label).click({force:true})
  })

  //overwriting contains() function

//   Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter,text, options = {}) => {
//     // Determine if the filter argument was passed
//     if (typeof text === 'object') {
//         options = text
//         text = filter
//         filter = undefined
//     }
//     // Ensure options object is defined
    
//     options.matchCase = false

//     return originalFn(subject,filter,text, options)
// });

  //login custom command
  Cypress.Commands.add('login_command',(email,password) =>{
    cy.get("#Email").type(email)
    cy.get("#Password").type(password)
    cy.get("button[class='button-1 login-button']").click()
  })

  //login custom command
  Cypress.Commands.add('login_beksfel',(email,password)=>{
    cy.get("input[placeholder='Email'][type='email']").type(email)
    cy.xpath("//div[@class='flex justify-center items-center absolute top-0 w-full md:w-[600px] h-full p-[25px] bg-[#ecf0f3] transition-all duration-[1250ms] z-[200] md:left-0']//input[@placeholder='Password']").type(password)
    cy.get("div[class='flex justify-center items-center absolute top-0 w-full md:w-[600px] h-full p-[25px] bg-[#ecf0f3] transition-all duration-[1250ms] z-[200] md:left-0'] button[class='auth-button']").click()
  })

  Cypress.Commands.add("myItems",(selector) =>{
    cy.get("#tbodyid")
  })

  Cypress.Commands.add("Cart",(selector) =>{
    cy.get(`${selector}[type='text']`)
  })

  Cypress.Commands.add("category",(selector) =>{
    cy.get(`[${selector}="byCat('phone')]"`).click()
  })