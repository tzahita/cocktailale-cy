Cypress.Cookies.defaults({
    preserve: [],
  });
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });