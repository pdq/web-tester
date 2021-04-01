const pageObject = require('../pages/index.page')

describe('pdq.com', () => {
  it.only('you can search for content with the quick search bar', () => {
    browser.url('https://www.pdq.com')
    browser.waitUntil(() => pageObject.body.isDisplayed() === true)
    pageObject.setValue('PowerShell')
    browser.keys('enter')
    expect(browser).toHaveUrl('https://www.pdq.com/search/?q=Powershell&p=1')
  })

  it('dropdown menus are navigable', () => {
    browser.url('https://www.pdq.com')
    browser.waitUntil(() => pageObject.body.isDisplayed() === true)
    expect(header.productsDropdown).toBeExisting()
  })

  it('all footer links work', () => {
    browser.url('https://www.pdq.com')
    browser.waitUntil(() => pageObject.body.isDisplayed() === true)
    pageObject.footerLinks.array.forEach((link) => {
      expect(link).toBeVisible()
    })
  })

  it('free trial link takes you to a registration page', () => {
    browser.url('https://www.pdq.com')
    browser.waitUntil(() => pageObject.body.isDisplayed() === true)
    pageObject.freeTrialLink.click()
  })

  it('we have a link somewhere on the page to schedule a demo', () => {
    browser.url('https://www.pdq.com')
    browser.waitUntil(() => pageObject.body.isDisplayed() === true)
    expect(pageObject.demolink).toBeVisible()
  })
})
