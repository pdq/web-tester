module.exports = {
  open_browser: function(browser) {
	  browser.url('https://www.pdq.com')
	  .waitForElementVisible('body', 1000)
	  .maximizeWindow()
  },
  // you can search for content with the quick search bar
  quick_search_works: function (browser) {
    browser
      .setValue('input[type=text]', 'PowerShell')
      .keys('')
      .assert.urlContains('?q=PowerShell')
  },

  // dropdown menus are navigable
  dropdown_menus_work: function (browser) {
	
    browser
      .moveToElement('button[data-test-id=resources]', 100, 100, function () {
    	browser.click('button[data-test-id=resources]')
        browser.assert.visible('a[data-test-id=blog-menu-button]')
      })
  	},

  // we have a link somewhere on the page to schedule a demo
  demo_link_exists: function (browser) {
	browser.back()
	browser.url('https://www.pdq.com')
	  .waitForElementVisible('body', 1000)
    browser.expect.element('Schedule a demo', 'link text').to.be.visible;
  },
  
//free trial link takes you to a registration page
  free_trial_links_work: function (browser) {
    browser
      .click('a[data-test-id=start-trial-cta-link]')
  },
  
//all footer links work
  footer_links_work: function (browser) {
	  browser.back()
	  browser
	  .execute('window.scrollTo(0,document.body.scrollHeight);');
    const footerlinks = [
      'Enterprise SL',
      'PDQ Deploy',
      'PDQ Inventory',
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
    	browser.expect.element(potentialFooterLink, 'link text').to.be.visible;
      //browser.assert.visible(potentialFooterLink)
    })
    browser.end()
  }
}
