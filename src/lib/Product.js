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

const paramProcessor = params => {
  const keys = Object.keys(params)
  const obj = {}
  keys.forEach(key => {
    let processed;
    const value = params[key]
    processed = value
    if(Array.isArray(value)){
      processed = value.join(',')
    }
    obj[key] = processed
  });
  return obj
}

module.exports = Product;
