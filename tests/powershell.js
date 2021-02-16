module.exports = {
  // you can search for commands
  search_commands: function (browser) {
    browser
      .url('https://www.pdq.com/powershell')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'get-')
      .keys('')
      .assert.visible('a[href*="/powershell/get-childitem"]')
      .end()
  },

  // links to command articles work
  links_work: function (browser) {
    browser
      .url('https://www.pdq.com/powershell')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'get-childitem')
      .keys('')
      .assert.visible('a[href*="/powershell/get-childitem"]').click()
      .end()
  }
}
