const selectors = {
  firstHeader: '[class*="pageHeader"]',
  search: '[placeholder="Search"]',
  emptyState: '[class*="container"]',
};

export class Header {
  validateHeader(firstHeader: string, secondHeader: string) {
    cy.get(selectors.firstHeader).should('contain.text', firstHeader);
    cy.get(selectors.firstHeader).siblings().should('contain.text', secondHeader);
  }
  validateSearch() {
    cy.get(selectors.search).should('be.visible');
  }

  search(text: string, emptyStateText?: string) {
    cy.server();
    cy.route('POST', '**api/cards/all').as('all');
    cy.get(selectors.search).click().clear().type(text);
    cy.wait('@all').its('status').should('eq', 200)
    if (emptyStateText) {
      cy.get(selectors.emptyState).should('contain.text', emptyStateText);
    } else {
      cy.get(selectors.emptyState).should('not.contain.text', emptyStateText);
    }
  }
}
