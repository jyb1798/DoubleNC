describe("start", () => {
  it("should navigate to the about page", () => {
    cy.visit("https://double-nc.vercel.app/");

    cy.get('a[href*="/categories/67"]').click();

    cy.url().should("include", "/categories/67");

    cy.get("p").contains("카페");

    cy.get('a[href*="/brands/63"]').click();

    cy.url().should("include", "/brands/63");

    cy.get('img[alt="seeback"]').click();
    
    cy.get('img[alt="seeback"]').click();
  });
});
