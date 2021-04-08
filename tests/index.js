const pageObject = require('../pages/index.page')

/**
 * This cleans up the links from the footers section and outputs them in a way that browser.url() will accept
 * @param arrLinks
 * @returns {*[]}
 */
function getFormattedLinks(arrLinks) {
  let links = [];
  let link = '';

  for(let i = 0; i < arrLinks.length; i++) {
    link = arrLinks[i].getAttribute("href");
    if(link === '/') {
      //href="/" is the current page so use the current page here.
      link = pageObject.getPageUrl + '/';
    } else if(link.includes('https://')) {
      //This is already a url no need to do anything
    } else {
      //This is a relative path so we'll append our domain.
      link = pageObject.getPageUrl + link;
    }
    links.push(link);
  }

  return links;
}

/**
 * Use this to test if a given url is a valid javascript URL
 * @param url
 * @returns {boolean}
 */
function isValidUrl(url) {
  try {
    new URL(url);
  } catch(e) {
    //this is a bad hombre
    return false
  }
  return true
}

describe('PDQ Landing Page', () => {
  beforeEach( () => {
    browser.url(pageObject.getPageUrl);
    browser.waitUntil(() => pageObject.body.isDisplayed() === true);
  });

  it('The Demo Schedule Link is Valid', () => {

    let link = pageObject.demoSel;
    let href = link.getAttribute('href');

    describe('The demo link is clickable', () => {
      expect(link).toBeClickable();
    });

    describe('The free trial link is a valid javascript URL', () => {
      expect(isValidUrl(href)).toBeTruthy();
    });

    describe('The demo link is a valid ref', () => {
      browser.url(href);
      expect(browser).toHaveUrl(pageObject.demoUrl);
    });
  })

  /**
   * This test can be extended by increasing the number of search terms, including blank terms.
   * I'm not sure if that would be a good value proposition vs component testing the underlying React element for
   * those properties??
   */
  it('you can search for content with the quick search bar', () => {
    let term = pageObject.searchTerms[0];

    pageObject.searchBoxSel.addValue(`${pageObject.searchTerms}\n`);
    expect(browser).toHaveUrl(`https://www.pdq.com/search/?q=${term}&p=1`);
  })

  /**
   * This test may be deficient. Navigable can be loosely interpreted.
   * As is, these tests confirm the expected behavior of a dropdown nav menu
   * NOT that the inner contents of the dropdown, i.e. links, are valid.
   *
   * Given the high time cost of UI testing, I believe this configuration is the most valuable.
   * If we want to test that the links are valid I would suggest using an integration test to test that the HTTP
   * response is valid for dropdown items.
   */
  it('dropdown menus are navigable', () => {
    describe("The buttons controlling the dropdown menus exists", () => {
      //Confirm that the button elements exist in $[menu]
      expect(pageObject.products).toBeExisting();
      expect(pageObject.resources).toBeExisting();
    });

    describe('The "Products" dropdown is visible when the products button is clicked', () => {
      pageObject.products.click();
      expect(pageObject.productsDropdown).toBeVisible();
    });

    describe('This "Resources" dropdown is visible when the products button is clicked', () => {
      pageObject.resources.click();
      expect(pageObject.resourcesDropdown).toBeVisible();
    });
  })

  /**
   * The last assertion in the test involves navigating to each link to make sure they resolve correctly.
   * This is an expensive pattern and would be better accomplished using an integration test.
   */
  it('all footer links work', () => {

    const footer = pageObject.footer
    describe('The footer exists on the dom', () => {
      expect(footer).toExist();
    });

    const footerLinks = footer.$$('a');

    describe('The Footer Links are clickable', () => {
      for( let j = 0; j < footerLinks.length; j++) {
        expect(footerLinks[j]).toBeClickable();
      }
    });

    const links = getFormattedLinks(footerLinks);

    describe('The Footer Links are valid javascript URLs', () => {
      links.forEach( (currentVal) => {
        let flag = isValidUrl(currentVal);
        expect(flag).toBeTruthy();
      })
    })

    //This is bad and I ought to feel bad.... and I do...
    describe('The Footer Links resolve', () => {
      let flag = true;

      links.forEach( (currentVal) => {
        try{
          browser.url(currentVal);
        } catch(e) {
          flag = false;
        };
      })
      expect(flag).toBeTruthy();

    })

  })

  it('The Free Trial Link is Valid', () => {
    let link = pageObject.freeTrialSel;
    let href = link.getAttribute('href');

    describe('The free trial link is clickable', () => {
      expect(link).toBeClickable();
    })

    describe('The free trial link is a valid javascript URL', () => {
      expect(isValidUrl(href)).toBeTruthy();
    })

    describe('The free trial link is a valid ref', () => {
      link.click();
      expect(browser).toHaveUrl(pageObject.freeTrialUrl);
    })

  })
})
