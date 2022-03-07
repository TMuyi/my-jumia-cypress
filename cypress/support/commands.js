// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("existingLogin", (email, password) => {
  //assertion that login page is correct
  cy.title().should("eq", "Login Page"); //move?
  cy.location("pathname").should("eq", "/customer/account/login/");
  cy.get(".-fg1 > :nth-child(1) > .lbl").type(data.email, { delay: 50 });
  cy.get(".fi-br > .lbl").type(data.password, { delay: 50 });
  cy.get(".fi-br > button > .ic").click();
  //loginPage.clickFinalLogin().click();
});
