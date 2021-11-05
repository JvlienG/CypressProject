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


Cypress.Commands.add('authenticate', () => {
    cy.request({
        method: 'POST',
        url: 'https://w.deepl.com/account', 
        body: {
            id: 5110002, 
            jsonrpc: "2.0", 
            method: "login", 
            params: {
                email: "zenityformation@yopmail.com", 
                password: "Zenity2021",
                keepLogin: true
            } 
        },
    }) 
})

Cypress.Commands.add('addPet', (petCategoryName, petName, petStatus) => { 
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet', 
        body: {
            "id": 0, 
            "category": {
                "id": 0,
                "name": petCategoryName 
            },
            "name": petName,
            "status": petStatus 
        },
    }).then(response => { 
        cy.log(response.status) 
        cy.log(JSON.stringify(response.body))
    }) 
})