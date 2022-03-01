class DefaultPage {
  getAccount() {
    return cy.get(":nth-child(1) > .trig");
  }
  getLogin() {
    return cy.get("#dpdw-login-box > .inbox > .-pam > .btn");
  }
}
export default DefaultPage;
