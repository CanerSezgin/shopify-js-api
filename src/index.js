const axios = require("axios");
const Product = require("./lib/Product");

class ShopifyAPI {
    constructor(shop, accessToken) {
      this.accessToken = accessToken;
      this.shop = shop;
      
      const client = axios.create({
          baseURL: `https://${shop}.myshopify.com`,
          headers: { 'X-Shopify-Access-Token': this.accessToken }
      })

      this.product = new Product(client)
    }
  
}

module.exports = ShopifyAPI