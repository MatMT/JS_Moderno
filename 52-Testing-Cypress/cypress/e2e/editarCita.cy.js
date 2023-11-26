/// <reference types="cypress" />

describe('Llenar campos para una nueva cita y EDITAR', () => {
    it('passes', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Hook');

        cy.get('[data-cy="propietario-input"]')
            .type('Mat');

        cy.get('[data-cy="tel-input"]')
            .type('22442244');

        cy.get('[data-cy="date-input"]')
            .type('2023-11-25');

        cy.get('[data-cy="time-input"]')
            .type('22:20');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo duerme el we');

        cy.get('[data-cy="submit-cita"]')
            .click();

        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')

        // Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
    });

    it('Edita la cita', () => {
        cy.get('[data-cy="btn-edit"]')
            .click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Happy');

        cy.get('[data-cy="submit-cita"]')
            .click();

        // Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
    });
})