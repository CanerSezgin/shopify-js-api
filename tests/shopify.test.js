const ShopifyAPI = require("../src/index");
const { testCredentials } = require("./utils/shopify");

const CREDENTIALS = {
  VALID: [testCredentials.shop, testCredentials.accessToken],
  MISSING_SHOP: ["", testCredentials.accessToken],
  MISSING_TOKEN: [testCredentials.shop, ""],
  MISSING_ALL: ["", ""],
  NO_INPUT: [undefined, undefined],
  WRONG_SHOP: ["invalid_shop", testCredentials.accessToken],
  WRONG_TOKEN: [testCredentials.shop, "invalid_token"]
};

describe("Shopify API Instance", () => {
  it.each(Object.keys(CREDENTIALS).map(c => [c, ...CREDENTIALS[c]]))(
    "Shopify Instance with: %o",
    (name, shop, accessToken) => {
      console.log("ok", name);
      //const shopify = new ShopifyAPI(shop, accessToken)
      if (name === "VALID") {
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
