const paramProcessor = require('../utils/paramProcessor');

class Product {
  constructor(client) {
    /**
     * Retrieves a list of products
     * @param {ProductListParams} [params]
     */
    this.list = async (params) => {
      try {
        console.log("product list");
        const method = "get";
        const url = `/admin/api/2020-01/products.json`;
        params = paramProcessor(params)

        const response = await client({ method, url, params });
        return response.data;
      } catch (error) {
        throw error;
        throw createShopifyError(error, this.shop);
      }
    };

    /**
     * Retrieves a count of products.
     * @param {ProductCountParams} [params]
     */
    this.count = async params => {
      try {
        const method = "get";
        const url = `/admin/api/2020-01/products/count.json`;
        params = paramProcessor(params)

        const response = await client({ method, url, params });
        return response.data;
      } catch (error) {
        throw error;
        throw createShopifyError(error, this.shop);
      }
    };
  }
}

module.exports = Product;
