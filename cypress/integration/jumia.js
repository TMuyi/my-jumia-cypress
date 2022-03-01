/// <reference types="cypress" />

import DefaultPage from "../support/DefaultPage";
import CartPage from "../support/CartPage";
import SearchPage from "../support/SearchPage";

describe("rstestv8", () => {
  let data;
  beforeEach(function () {
    cy.visit("https://www.jumia.com.ng/"); //visit
    cy.get(":nth-child(1) > .trig").click; //move to pompom
    cy.fixture("profile").then((fdata) => {
      data = fdata;
    });
  });

  it("Login test", () => {
    //
  }); //it
}); //describe
