module.exports = {
  // you can search for articles
  search_for_articles: function (browser) {
    browser
      .url('https://www.pdq.com/search')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=search]', 'PowerShell')
      .keys('')
      .assert.urlContains('?q=PowerShell')
      .end()
  },

  // you can filter with tags
  filter_with_tags: function (browser) {}
}
