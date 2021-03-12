module.exports = {

  // This runs before every test.
  beforeEach: browser => {
    browser.url('https://www.pdq.com')
  },

  // This runs after every test.
  afterEach: browser => {
    browser.end()
  },

  // Searching for content with the quick search bar.
  quick_search_works: function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'PowerShell')
      .keys('')
      .assert.urlContains('?q=PowerShell')
  },

  // Dropdown menus are navigable.
  dropdown_menus_work: function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .moveToElement('button[data-test-id="resources"]','button.css-1lxi5g6','a[data-test-id="blog-menu-button"]', function () {
        browser
          .assert.visible('a[data-test-id="blog-menu-button"]')
      })
  },

  // Free trial link takes you to a registration page.
  free_trial_links_work: function (browser) {
    browser
      .click('[data-test-id=start-trial-cta-link]')
      .assert.urlContains('Register')
  },
  
  // Checking for link on main page to schedule a demo.
  demo_link_exists: function (browser) {
    browser
      .waitForElementVisible('body', 3000)
      .assert.visible('a[href*="https://app.hubspot.com/meetings/kelly-hammer/45-minute-product-demo"]')
  },

  // All footer links work.
  footer_links_work: function (browser) {
    const footerlinks = [
      'PDQ Deploy',
      'PDQ Inventory',
      'Enterprise SL',
      'Pricing',
      'Downloads',
      'Licensing',
      'Buy',
      'Support',
      'Videos',
      'Blog',
      'PowerShell',
      'Webcast',
      'Getting Started',
      'ROI Calculator',
      'Search',
      'About',
      'Tax Documents',
      'Contact',
      'Careers',
      'Documentation',
      'Privacy Policy',
      'Terms of Use'
    ]
    browser
      .waitForElementVisible('body', 3000)
      for(var x = 0; x < 22; x++){
        browser
          .useXpath()
          .click(`(//li/a[text()[contains(.,"${footerlinks[x]}")]])`)
          .url('https://www.pdq.com')
      }

      //I couldn't get the forEach to work for me, I made a work around using the For function

      // footerlinks.forEach(potentialFooterLink => {
      //   browser.assert.visible(potentialFooterLink)
      // })
  },
}
