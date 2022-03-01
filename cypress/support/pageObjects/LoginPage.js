class LoginPage {
  getEmail() {
    return cy.get(".-fg1 > :nth-child(1) > .lbl");
  }

  getPassword() {
    return cy.get(".fi-br > .lbl");
  }
  getPasswordVis() {
    return cy.get(".fi-br > button > .ic");
  }
  clickFinalLogin() {
    return cy.get("#authForm > ._prim");
  }
  //registration
  getRegistration() {
    return cy.get(":nth-child(2) > .col12 > ._prim");
  }

  getFirstName() {
    return cy.get(":nth-child(2) > .-mrl > .lbl");
  }

  getLastName() {
    return cy.get(":nth-child(2) > :nth-child(2) > .lbl");
  }

  getRegEmail() {
    return cy.get(":nth-child(3) > .-mrl > .lbl");
  }
  getRegPassword() {
    return cy.get(".fi-br > .lbl");
  }
  getPhoneNo() {
    return cy.get(".-mlm > .lbl");
  }
  getCheckBoxTerms() {
    return cy.get("#fi-terms");
  }
  getCheckBoxNewsie() {
    return cy.get("#fi-newsletter");
  }
  getCreateAccount() {
    return cy.get(".-ptl > .btn");
  }

  //   namehere() {
  //     return;
  //   }
}
export default LoginPage;
