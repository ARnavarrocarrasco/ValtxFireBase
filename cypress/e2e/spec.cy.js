/// <reference types="cypress" />




describe('template spec', () => {
  beforeEach("Ir al proyecyo", () => {
    cy.visit('http://localhost:3000')
  })
  it('passes', () => {
    cy.contains('FireShooping v3')
  })
  it('Podemos aceder a la rura de registrarse', () => {
    const registerTitle = 'Registrate para tener acceso a la mejor App del Mundo'
    cy.contains(registerTitle).should('not.exist')
    cy.contains('Registrate').click()
    cy.contains(registerTitle)
  })
  it('Podemos registrar a un usuario',  () => {
    const email = "carrasco2@gmail.com"
    const password = "milagros@gmail.com"
    cy.contains('Registrate').click()
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder = "Password"]').type(password)
    cy.get('button.submit-button').click()
    // cy.contains('Inicio').should('exist')
    // cy.contains('Log Out').click()
  })
  it('Podemos iniciar sesión', () => {
    const email = "cavarro@gmail.com"
    const password = "milagros@gmail.com"
    
    cy.contains('Login').click()
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder = "Password"]').type(password)
    cy.contains('Ingresar').click()
    // cy.contains('Log Out').click()
  })
})

describe('Testeamos la aplicacion de notas', () => {
  beforeEach("Ir al proyecto", () => {
    cy.visit('http://localhost:3000')
  })

  it('Vamos a la aplicacion de notas', () => {
    cy.get('div.task-list').click()
    cy.contains('Necesitas estar logueado para poder leer y añadir tareas')
  })

  it('No podemos escribir ni el titulo ni la descripción', () => {
    cy.get('div.task-list').click()
    cy.contains('Necesitas estar logueado para poder leer y añadir tareas')
    cy.get('input[placeholder="título"]').should('be.disabled')
    cy.get('textarea[placeholder = "Descripción"]').should('be.disabled')
  })
  
  it('Nos logueamos y agregamos una nueva tarea', () => {
    const email = "cavarro@gmail.com"
    const password = "milagros@gmail.com"
    cy.contains('Login').click()
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder = "Password"]').type(password)
    cy.contains('Ingresar').click()
    cy.get('div.task-list').click()
    cy.contains('Introduce una nueva tarea')
    cy.get('input[placeholder="título"]').type('Es hora de dormir')
    cy.get('textarea[placeholder = "Descripción"]').type('Es muy tarde y debemos levantarnos temprano')
    cy.contains("Añadir").click()
  })
})
