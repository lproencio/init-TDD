describe("Flow Test", () => {
  it("flow", () => {
    cy.visit("/");
    cy.get("[data-cy=input-desc]").type("test cypress");
    cy.get("[data-cy=input-relevance]").type(5);
    cy.get("[data-cy=btn-submit]").should("not.have.class", "disabled");
    cy.get("[data-cy=btn-submit]").click();
    cy.get("[data-cy=all-notice]").should("to.have.length", 1);

    cy.get("[data-cy=btn-submit]").click();
    cy.get("[data-cy=all-notice]").should("to.have.length", 2);
    
  });
});
