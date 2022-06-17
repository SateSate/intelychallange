const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputEmail() {
    return $('[id="input_0"]')
  }

  get inputPassword() {
    return $('[id="input_1"]')
  }

  get createAccBtn() {
    return $('[id="AP_FirstPage_CreateAccount"]')
  }

  async register(email, password) {
    await this.inputEmail.setValue(email)
    await this.inputPassword.setValue(password)
    await this.createAccBtn.click()
  }
}

module.exports = new RegisterPage()
