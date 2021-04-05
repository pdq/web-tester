class pageObject {
  get body() {
    return $('body')
  }
  get searchbox() {
    return $('[type=text]')
  }
  get products() {
    return this.header.$('[data-test-id=products]')
  }
  get productsDropdown() {
    return this.products.nextElement()
  }
  get freeTrialLink() {
    return $('["data-test-id=start-trial-cta-link"]')
  }
  get demolink() {
    return $(
      '[href=https://app.hubspot.com/meetings/kelly-hammer/45-minute-product-demo]'
    )
  }
  get footerLinks() {
    return [
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
      'Terms of Use',
    ]
  }
}

module.exports = new pageObject()
