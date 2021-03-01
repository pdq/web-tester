module.exports = {
  // you can search for content with the quick search bar
  quick_search_works: function (browser) {
    browser
      .url('https://www.pdq.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'PowerShell')
      .keys('')
      .assert.urlContains('?q=Powershell')
      .end()
  },

  // dropdown menus are navigable
  dropdown_menus_work: function (browser) {
    browser
      .url('https://www.pdq.com')
      .waitForElementVisible('body', 1000)
      .moveToElement('button[data-test-id=resources]', 100, 100, function () {
        browser.assert.visible('[data-test-id]=blog-menu-button')
      })
      .end()
  },

  // all footer links work
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
    footerlinks.forEach(potentialFooterLink => {
      browser.assert.visible(potentialFooterLink)
    })
    browser.end()
  },

  // free trial link takes you to a registration page
  free_trial_links_work: function (browser) {
    browser
      .url('https://www.pdq.com')
      .waitForElementVisible('body', 1000)
      .click(['data-test-id=start-trial-cta-link'])
      .end()
  },

  // we have a link somewhere on the page to schedule a demo
  demo_link_exists: function (browser) {
    browser
      .url('https://www.pdq.com')
      .waitForElementVisible('body', 1000)
      .assert.visible(['href=https://app.hubspot.com/meetings/kelly-hammer/45-minute-product-demo'])
      .end()
  }
}
