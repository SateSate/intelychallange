const Page = require('./page')
const expect = require('chai').expect

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasicInfo extends Page {
  /**
   * define selectors using getter methods
   */
  get continueBtn() {
    return $('[id="AP_Basic_Info_continue"]')
  }
  get firstName() {
    return $('[id="input_2"]')
  }
  get lastName() {
    return $('[id="input_3"]')
  }
  get mobileNr() {
    return $('[id="input_4"]')
  }
  get zipCode() {
    return $('[id="input_5"]')
  }
  get qualification() {
    return $('[id="radio_6"]')
  }
  get shift() {
    return $(
      '/html/body/div[1]/div/div/form/div[2]/div[4]/div[7]/md-input-container/div/md-checkbox[1]'
    )
  }
  get license() {
    return $('[id="radio_11"]')
  }
  get termsOfService() {
    return $(
      '/html/body/div[1]/div/div/form/div[2]/div[4]/div[9]/md-input-container/md-checkbox'
    )
  }

  async verifyIsContinueBtnInteractable(value) {
    await this.continueBtn.scrollIntoView()
    if (value == true) {
      await this.continueBtn.waitForDisplayed()
      await this.continueBtn.waitForClickable({
        timeout: 8000,
      })
    }
    const isClickable = await this.continueBtn.isClickable()

    expect(isClickable).to.equal(value)
  }
}

module.exports = new BasicInfo()
