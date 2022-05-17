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
    const defaultPage = new DefaultPage();
    const loginPage = new LoginPage();

    cy.get("@data").then((data) => {
      cy.get(":nth-child(1) > .trig").should("be.visible").click();
      cy.get("#dpdw-login-box > .inbox > .-pam > .btn").should("be.visible").click();

      //assertion that login page is correct
      cy.title().should("eq", "Login Page"); //move?
      cy.location("pathname").should("eq", "/customer/account/login/");
      cy.get(".-fg1 > :nth-child(1) > .lbl").type(data.email, { delay: 50 });
      cy.get(".fi-br > .lbl").type(data.password, { delay: 50 });
      cy.get(".fi-br > button > .ic").click();
      //loginPage.clickFinalLogin().click();
    });
  }); //it

  it("Signup test", () => {
    const loginPage = new LoginPage();
    const defaultPage = new DefaultPage();

    cy.get("@data").then((data) => {
      //wrapping so I get access to data alias,
      //this is scuffed if I need multiple fixtures though
      cy.get(":nth-child(1) > .trig").should("be.visible").click();
      cy.get("#dpdw-login-box > .inbox > .-pam > .btn").should("be.visible").click();
      cy.title().should("eq", "Login Page"); //move?
      cy.get(":nth-child(2) > .col12 > ._prim").click();
      cy.get(":nth-child(2) > .-mrl > .lbl").type(data.firstName, { delay: 50 });
      cy.get(":nth-child(2) > :nth-child(2) > .lbl").type(data.lastName, { delay: 50 });
      cy.get(":nth-child(3) > .-mrl > .lbl").type(data.email, { delay: 50 });
      cy.get(".fi-br > .lbl").type(data.password, { delay: 50 });
      cy.get(".-mlm > .lbl").type(data.phoneNumber, { delay: 50 });

      cy.get("#fi-newsletter").uncheck({ force: true });
      cy.get(".-ptl > .btn").click(); //negative asssertion here for CheckBoxTerms()
      cy.get("#fi-terms").check({ force: true });
      // loginPage.getCreateAccount().click(); don't want to actually sign up
    });
  }); //it

  it("search for product and add to cart", () => {
    const defaultPage = new DefaultPage();

    cy.get("@data").then((data) => {
      //also, pom pom-ing is stress
      cy.get("#fi-q").type(data.productName[0], { delay: 50 });

      //to select the results
      //i can either loop through the drop down results,
      //or click the search button
    });

    // it("rstestv2", () => {
    //   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    //   cy.get(".search-keyword").type("ca");
    //   cy.wait(2000);
    //   cy.get(".products").as("productlocator");
    //   cy.get("@productlocator")
    //     .find(".product")
    //     .eq(2)
    //     .contains("ADD TO CART")
    //     .click()
    //     .then(() => {});
    //   cy.get("@productlocator")
    //     .find(".product")
    //     .each(($el, index, $list) => {
    //       const textVeg = $el.find("h4.product-name").text();
    //       if (textVeg.includes("Cashew")) {
    //         cy.wrap($el).find("button").click();
    //       }
    //     });

    //   cy.get(".brand").should("have.text", "GREENKART");
    //   cy.get(".brand").then((logoelement) => {
    //     cy.log(logoelement.text());
    //   });

    //   cy.get(".cart-icon > img").click();
    //   //cy.get(".cart-icon > img"); //CSS selector method to proceed to checkout
    //   cy.contains("PROCEED TO CHECKOUT").click();
    //   cy.get(":nth-child(14)").click();
    //});
  }); //it
}); //describe
