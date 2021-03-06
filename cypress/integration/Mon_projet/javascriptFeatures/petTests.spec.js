/// <reference types="cypress"/>

before(() => {
    cy.log('I run once before all tests')
    cy.visit('https://petstore.swagger.io')
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


it('Add a new pet in the pet store', () => { 
    cy.addPet('dog', 'Pogo', 'available')
})

it('Creates new pets based on json data', () => { 
    cy.readFile('cypress/fixtures/petData.json').then(data => {
        for (const petData of data.petData) { 
            cy.addPet(petData.petCategoryName, petData.petName, petData.petStatus)
        }
    }) 
})

it('Creates new pets based on csv data', () => { cy.readFile('cypress/fixtures/petData.csv').then(data => {
    for (const petData of data.trim().split('\n').slice(1)) { 
        cy.addPet(petData.split(';')[1], petData.split(';')[0],petData.split(';')[2]) }
    }) 
})