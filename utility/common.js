// /pages/cartPage.js
class common {

    async validateButton(locator) {
      await expect(locator).toBeVisible();
    }

    
  }
  module.exports = common;
  