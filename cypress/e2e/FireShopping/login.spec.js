import {cy} from "cypress"

describe("testeamos la gestión de usuarios", () => {
    beforeEach(() => {
        //Testear que se renderiza correctamente
        cy.visit('http://localhost:3000')
    })

    it("Se renderiza correctamente", () => {
        cy.contains('FireShopping v3')
    })
})