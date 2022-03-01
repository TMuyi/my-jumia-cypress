/// <reference types="cypress" />

import DefaultPage from "../support/pageObjects/DefaultPage";
import CartPage from "../support/pageObjects/CartPage";
import SearchPage from "../support/pageObjects/SearchPage";
import LoginPage from "../support/pageObjects/LoginPage";

describe("rstestv8", () => {
  let data;
  before(() => {
    cy.visit(Cypress.env("url")); //visit

    cy.fixture("users").then((fdata) => {
      data = fdata;
    });
  });

  it("Login test", () => {
    const defaultPage = new DefaultPage();
    const loginPage = new LoginPage();

    defaultPage.getAccount().should("be.visible").click();
    defaultPage.getLogin().should("be.visible").click();
    cy.title().should("eq", "Login Page"); //move?
    loginPage.getEmail().type(data.email, { delay: 50 });
    loginPage.getPassword().type(data.password, { delay: 50 });
    loginPage.getPasswordVis().click();
    loginPage.clickFinalLogin().click();
  }); //it

  it.only("Signup test", () => {
    const loginPage = new LoginPage();
    const defaultPage = new DefaultPage();

    defaultPage.getAccount().should("be.visible").click();
    defaultPage.getLogin().should("be.visible").click();
    cy.title().should("eq", "Login Page"); //move?
    loginPage.getRegistration().click();
    loginPage.getFirstName().type(data.firstName, { delay: 50 });
    loginPage.getLastName().type(data.lastName, { delay: 50 });
    loginPage.getRegEmail().type(data.email, { delay: 50 });
    loginPage.getRegPassword().type(data.password, { delay: 50 });
    loginPage.getPhoneNo().type(data.phoneNumber, { delay: 50 });

    loginPage.getCheckBoxNewsie().uncheck({ force: true });
    loginPage.getCreateAccount().click(); //negative asssertion here for CheckBoxTerms()
    loginPage.getCheckBoxTerms().check({ force: true });
    // loginPage.getCreateAccount().click(); don't want to actually sign up
    //
  }); //it
}); //describe
