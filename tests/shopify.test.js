const ShopifyAPI = require("../src/index");
const { testCredentials } = require("./utils/shopify");

const CREDENTIALS = {
  VALID: [testCredentials.shop, testCredentials.accessToken],
  MISSING_SHOP: ["", testCredentials.accessToken],
  MISSING_TOKEN: [testCredentials.shop, ""],
  MISSING_ALL: ["", ""],
  NO_INPUT: [undefined, undefined]
};

describe("Shopify API Instance", () => {
  it.each(Object.keys(CREDENTIALS).map(c => [c, ...CREDENTIALS[c]]))(
    "Shopify Instance with: %o",
    (name, shop, accessToken) => {
      if (name === "VALID") {
        const shopify = new ShopifyAPI(shop, accessToken)
        expect(shopify).toMatchObject({
          shop: testCredentials.shop,
          accessToken: testCredentials.accessToken
        });
      } else {
        expect(() => {
          new ShopifyAPI(shop, accessToken);
        }).toThrow("ShopifyInstance");
      }
    }
  );
});
