class pageObject {

  get getPageUrl() {
    return 'https://www.pdq.com';
  }

  /**
   * This is the test attr used to select dom elements
   * Caution: not all tested elements use this selector. Woe is you who doesn't confirm what you're selected in the dom.
   * @returns {string}
   */
  get getTestAttr() {
    return 'data-test-id=';
  }

  get body() {
    return $('body');
  }

  get footer() {
    return $('footer');
  }

  /**
   * This is a brittle selector. This selector relies on there being only one text input on the page.
   * Resolution: Add a data attr OR select on the parent element [role="combox"] Or on the partial class [class="react-autosuggest_input]
   * @returns {*}
   */
  get searchBoxSel() {
    return $('input[type=text]');
  }

  /**
   * This term can be expanded to test more terms. This is not a robust search of the searchbox utility
   * @returns {array}
   */
  get searchTerms() {
    return ['PowerShell'];
  }

  get navMenu() {
    return $('menu');
  }

  get products() {
    const sel = '[data-test-id=products]';
    return this.navMenu.$(sel);
  }

  get resources() {
    const sel = '[data-test-id=resources]'
    return this.navMenu.$(sel);
  }

  /**
   * This is a brittle selector. The selector relies on the dropdown element to be rendered as a sibling to <button>
   * Resolution: The dropdown should render with a data-test attr.
   * @returns {Promise<WebdriverIO.Element>}
   */
  get productsDropdown() {
    return this.products.nextElement();
  }

  /**
   * This is a brittle selector. The selector relies on the dropdown element to be rendered as a sibling to <button>
   * Resolution: The dropdown should render with a data-test attr.
   * @returns {Promise<WebdriverIO.Element>}
   */
  get resourcesDropdown() {
    return this.resources.nextElement();
  }

  get freeTrialSel() {
    const sel = 'start-trial-cta-link';
    return $(`a[${this.getTestAttr}"${sel}"]`);
  }

  get freeTrialUrl() {
    return 'https://sales.pdq.com/Register?trial=true';
  }

  /**
   * This is a brittle selector.
   * The application dynamically alters the URL string in the links. Is it
   * @returns {*}
   */
  get demoSel() {
    const sel = $("=Schedule a demo");
    return sel;
  }

  /**
   * This is also brittle. Woe is unto anyone who reassigns Kelly and breaks my test.
   * @returns {string}
   */
  get demoUrl() {
    return 'https://app.hubspot.com/meetings/kelly-hammer/45-minute-product-demo';
  }
}

module.exports = new pageObject()
