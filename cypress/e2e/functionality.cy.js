describe('Test on different viewports', () => {
  beforeEach(() => {
    cy.visit('localhost:5173');
  });
  it('Shows the "factura" aside when clicking the "Mostrar" button on mobile viewport', () => {
    cy.viewport('iphone-6');
    // Verifica que el elemento 'aside#factura' esté oculto inicialmente
    cy.get('aside#factura').should('have.css', 'display', 'none');

    // Hace clic en el botón 'Mostrar'
    cy.get('button.result--button').eq(0).click();

    // Verifica que el elemento 'aside#factura' ya no esté oculto
    cy.get('aside#factura').should('not.have.css', 'display', 'none');
  });
  it("Shows the 'factura' aside when clicking the 'Mostrar' button on desktop viewport", () => {
    cy.viewport(1280, 720); // Establece el viewport para escritorio

    cy.get('button.result--button').eq(0).click();
    cy.get('aside#factura').should('not.have.css', 'display', 'none');
  });
  it('Adds "dark" class to body when clicking the "Change theme" button', () => {
    cy.get('body').should('not.have.class', 'dark');

    // Hace clic en el botón 'Change theme'
    cy.get('button.result--button').eq(1).click();

    // Verifica que la etiqueta body tenga la clase "dark" después de hacer clic en el botón
    cy.get('body').should('have.class', 'dark');
  });
});
