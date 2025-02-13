const selectors = {
  emailInput: '#email',
  loginBtn: '.prim',
  passwordInput: '#password',
};

export class Login {
  private email: string = Cypress.env('EMAIL');
  private password: string = Cypress.env('PASSWORD');
  private login_url: string = Cypress.env('LOGIN_URL');

  login() {
    cy.server();
    cy.route('POST', '**api/cards/all').as('all');
    cy.visit(this.login_url);
    cy.contains('Get Started').click();
    cy.url().should('include', '/getStarted');
    cy.get(selectors.emailInput).type(this.email);
    cy.get(selectors.passwordInput).type(this.password);
    cy.get(selectors.loginBtn).contains('Submit').click({ force: true });
    cy.wait('@all').its('status').should('eq', 200)
    cy.url().should('include', '/feed');
  }
}
