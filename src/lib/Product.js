const axios = require("axios");

class Product {
  constructor(client) {
    this.client = client;
  }

  /**
   * Retrieves a list of products
   */
  async list() {
    try {
      const method = "get";
      const url = `/admin/api/2020-01/products.json`;

      const response = await this.client({ method, url });
      return response.data;
    } catch (error) {
      throw createShopifyError(error, this.shop);
    }
  }

  /**
   * Retrieves a list of products
   */
  async count() {
    try {
      const method = "get";
      const url = `/admin/api/2020-01/products/count.json`;

      const response = await this.client({ method, url });
      return response.data;
    } catch (error) {
      throw createShopifyError(error, this.shop);
    }
  }
}

module.exports = Product;
