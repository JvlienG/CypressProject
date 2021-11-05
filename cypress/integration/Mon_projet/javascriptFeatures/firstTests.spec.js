/// <reference types="cypress"/>

before(() => {
    cy.log('I run once before all tests')
    cy.visit('')
    
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

describe('Front end testing', () => { 
    it('Access the home page', () => {
        cy.log('This is within my created test') 
        cy.get('.lmt__source_textarea').should('be.visible')
        cy.get('.lmt__source_textarea').should((translateInput) => {
            expect(translateInput[0]).to.have.property('autocomplete', 'off') 
        })
    })
})