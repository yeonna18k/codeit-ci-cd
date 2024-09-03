describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
  beforeEach(() => {
    cy.visit("/")
  })
  it("기본 경로에 'Get started by'라는 텍스트가 있다", () => {
    cy.visit("/")
    cy.contains("Get started by");
  });

  it("기본 경로에 'Docs'라는 anchor heading이 있고 href 속성이 설정되어 있다", () => {
    cy.contains("Docs").should("have.prop", "href").and("equal", "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app")
  })
});
