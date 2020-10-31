const selectors = {
  filtersContainer: '[class*="filters_root"]',
  filtersHeader: '[class*="filters_header"]',
  filtersContent: '[class*="filter-content"]',
};

export class Sidebar {
  validateFilters(title: string, content: string) {
    cy.get(selectors.filtersContainer).find(selectors.filtersHeader).should('contain.text', title);
    cy.get(selectors.filtersContainer).find(selectors.filtersContent).children().should('contain.text', content);
  }

  filter(content: string) {
    cy.server();
    cy.route('POST', '**api/cards/all').as('all');
    cy.get(selectors.filtersContainer).find(selectors.filtersContent).contains(content).click();
    cy.wait('@all').its('status').should('eq', 200)
  }
}
