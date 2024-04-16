describe('Load the web site', () => {
  before(()=>{
    cy.visit("localhost:5173")
      
  })
  it("Get elements",()=>{
    cy.get('.product-card')
  })
});
