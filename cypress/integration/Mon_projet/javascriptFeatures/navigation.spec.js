/// <reference types="cypress"/>

before(() => {
    cy.log('I run once before all tests')
    cy.visit('/press')
    
})

beforeEach(() => {
    cy.log('I run before every test')
})
    
afterEach(() => {
    cy.log('I run after every test')
})
    
after(() => {
    cy.log('I run once after all tests')
})

describe('Exercice 2.2', () => {
    it('Translation page access button', () => {
        cy.visit('/press') 
        cy.get('.dl_cookieBanner--buttonAll').click() 
        cy.get('#dl_menu_translator_simplified').click() 
        cy.url().should('equal','https://www.deepl.com/translator')
    }) 
});

describe('Back end testing', () => { 
    it('Authenticate within DeepL service', () => {
        cy.visit('') 
        cy.authenticate().then(response => {
            cy.log(response.status)
            cy.log('I am authenticated') 
        })
    }) 
})