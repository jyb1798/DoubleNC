describe("start", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="/categories/67"]').click();

    cy.url().should("include", "/categories/62");

    cy.get("p").contains("카페");

    cy.get('a[href*="/brands/63"]').click();

    cy.url().should("include", "/brands/173");

    cy.get('a[href*="/items/137"]').click();

    cy.url().should("include", "/items/9996");

    cy.get("div").contains("옵션 선택하기").click();

    cy.get("button").contains("X").click();

    cy.get('img[alt="seeback"]').click();

    cy.get("a").contains("고객센터").click();

    cy.url().should("include", "/contacts");

    cy.get("button").contains("판매").click();

    cy.get('img[alt="seeMore"]').each(($btn, index) => {
      if (index >= 1) cy.wrap($btn).click();
    });

    cy.get("button").contains("구매").click();

    cy.get('img[alt="seeback"]').click();
  });
});
