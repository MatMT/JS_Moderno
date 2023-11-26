/// <reference types="cypress" />

describe('Valida el formulario', () => {
  it('Submit al form y mostrar alerta de error', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('[data-cy="formulario"]')
      .submit();

    // Seleccionar la alerta
    cy.get('[data-cy="alerta"]')
      .invoke('text')
      .should('equal', 'Todos los campos son Obligatorios');

    cy.get('[data-cy=alerta]')
      .should('have.class', 'alert-danger');
  })
})