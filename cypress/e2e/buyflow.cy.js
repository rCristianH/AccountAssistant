describe('Emulate a buy flow', () => {
  beforeEach(() => {
    cy.visit('localhost:5173');
  });
  it('Calculates total price of selected products accurately', () => {
    // Inicializamos una variable para almacenar el precio total
    let acumulate = 0;
    let finalPriceSpan;
    // Definimos una función para procesar la selección de productos
    const process = (i) => {
      // Seleccionamos el botón de producto correspondiente
      cy.get('.product-card--button--1')
        .eq(i)
        .click()
        // Después de hacer clic, obtenemos el precio del producto y lo sumamos al total
        .then((value) => {
          const a = parseInt(value.attr('data-price'));
          acumulate += a;
        });
    };
    // Iniciamos una nueva promesa para garantizar que los procesos se completen antes de continuar
    cy.wrap(null).then(() => {
      process(3);
      process(2);
    });
    // Después de que todos los procesos se completen, obtenemos el valor final del span
    cy.then(() => {
      cy.get('.spanResultPrice')
        .invoke('text')
        .then((text) => {
          finalPriceSpan = parseInt(text.trim(), 10);
          expect(acumulate).to.equal(finalPriceSpan);
        });
    });
  });
});
