const axios = require("axios");
const Product = require("./lib/Product");
const Access = require("./lib/Access");

class ShopifyAPI {
  constructor(shop, accessToken) {

      // Validations
      if (!shop || !accessToken) {
        throw Error(
          "ShopifyInstance: ShopName & AccessToken have to be provided."
        );
      }

      this.accessToken = accessToken;
      this.shop = shop;

      const client = axios.create({
        baseURL: `https://${this.shop}.myshopify.com`,
        headers: { "X-Shopify-Access-Token": this.accessToken }
      });

      this.access = new Access(client);
      this.product = new Product(client);
     
  }
}

module.exports = ShopifyAPI;
