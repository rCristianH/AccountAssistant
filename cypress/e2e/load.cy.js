describe('Load the web site', () => {
  before(()=>{
    cy.visit("localhost:5173")
      
  })
  it("Reload to page",()=>{
    cy.reload()
  })
});
