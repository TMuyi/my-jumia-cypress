/// <reference types="cypress" />
// TODO: selectors change.
import DefaultPage from "../support/pageObjects/DefaultPage";
import CartPage from "../support/pageObjects/CartPage";
import SearchPage from "../support/pageObjects/SearchPage";
import LoginPage from "../support/pageObjects/LoginPage";

describe("Jumia Features Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url")); //visit

    cy.fixture("users").as("data");
    cy.fixture("existingUser").as("eData");
  });

  it("Login test", () => {
    //broken by jumia update
    const defaultPage = new DefaultPage();
    const loginPage = new LoginPage();

    cy.get("@data").then((data) => {
      cy.get(":nth-child(1) > .trig").should("be.visible").click();
      cy.get("#dpdw-login-box > .inbox > .-pam > .btn")
        .should("be.visible")
        .click();

      //assertion that login page is correct
      cy.title().should("eq", "Login Page"); //move?
      cy.location("pathname").should("eq", "/customer/account/login/");
      cy.get(".-fg1 > :nth-child(1) > .lbl").type(data.email, { delay: 50 });
      cy.get(".fi-br > .lbl").type(data.password, { delay: 50 });
      cy.get(".fi-br > button > .ic").click();
      //loginPage.clickFinalLogin().click();
    });
  });

  it("Signup test", () => {
    //broken by jumia update
    const loginPage = new LoginPage();
    const defaultPage = new DefaultPage();

    cy.get("@data").then((data) => {
      //wrapping so I get access to data alias,
      //this is scuffed if I need multiple fixtures though
      cy.get(":nth-child(1) > .trig").should("be.visible").click();
      cy.get("#dpdw-login-box > .inbox > .-pam > .btn")
        .should("be.visible")
        .click();
      cy.title().should("eq", "Login Page"); //move?
      cy.get(":nth-child(2) > .col12 > ._prim").click();
      cy.get(":nth-child(2) > .-mrl > .lbl").type(data.firstName, {
        delay: 50,
      });
      cy.get(":nth-child(2) > :nth-child(2) > .lbl").type(data.lastName, {
        delay: 50,
      });
      cy.get(":nth-child(3) > .-mrl > .lbl").type(data.email, { delay: 50 });
      cy.get(".fi-br > .lbl").type(data.password, { delay: 50 });
      cy.get(".-mlm > .lbl").type(data.phoneNumber, { delay: 50 });

      cy.get("#fi-newsletter").uncheck({ force: true });
      cy.get(".-ptl > .btn").click(); //negative asssertion here for CheckBoxTerms()
      cy.get("#fi-terms").check({ force: true });
      // loginPage.getCreateAccount().click(); don't want to actually sign up
    });
  });

  it.only("search for product and add to cart", () => {
    const defaultPage = new DefaultPage();

    cy.get("@data").then((data) => {
      cy.get("#fi-q").type(data.productName[0], { delay: 50 });

      //to select the results
      //i can either loop through the drop down results,
      //or click the search button
    });
  }); //it
}); //describe
