/**
 * @TestCase IntelyCare coding Challenge..
 */

const emailGenerator = require('../../utils/emailGenerator')

const expect = require('chai').expect

const FirstStepPage = require('../pageobjects/register.page')
const BasicInfo = require('../pageobjects/basicInfo.page')

const url =
  'https://portal.dev.qa.automation1.legacy.intelycare.com/apply/career.html'

describe(`Intelycare automation coding challenge`, function () {
  before(async function () {
    await browser.maximizeWindow()
  })

  it('Create account first field', async () => {
    await FirstStepPage.open(url)
    await FirstStepPage.register(emailGenerator(), 'Letmein123!')

    await BasicInfo.verifyIsContinueBtnInteractable(false)
    await BasicInfo.firstName.setValue('John')
    await BasicInfo.lastName.setValue('Doe')
    await BasicInfo.mobileNr.setValue('7589577506')
    await BasicInfo.zipCode.setValue('02090')
    await BasicInfo.qualification.click()
    await BasicInfo.shift.click()
    await BasicInfo.license.click()
    await BasicInfo.termsOfService.click()
    await BasicInfo.verifyIsContinueBtnInteractable(true)
    await BasicInfo.continueBtn.click()

    let confirmPhoneNumberElement = await $(
      '/html/body/div[1]/div/div/form/div[2]/div[2]/h3'
    )

    await confirmPhoneNumberElement.waitForExist({ timeout: 5000 })

    await confirmPhoneNumberElement.waitUntil(
      async function () {
        const isVisible =
          await confirmPhoneNumberElement.isDisplayedInViewport()
        return expect(isVisible, 'Failed!').to.equal(true)
      },
      {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s',
      }
    )
  })
})
