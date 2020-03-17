class Product {
  constructor(client) {
    
    /**
   * Retrieves a list of products
   */
    this.list = async() => {
      try {
        const method = "get";
        const url = `/admin/api/2020-01/products.json`;
  
        const response = await client({ method, url });
        return response.data;
      } catch (error) {
        throw error
        throw createShopifyError(error, this.shop);
      }
    }

    this.count = async() => {
      try {
        const method = "get";
        const url = `/admin/api/2020-01/products/count.json`;
  
        const response = await client({ method, url });
        return response.data;
      } catch (error) {
        throw error
        throw createShopifyError(error, this.shop);
      }
    }

  }



}

module.exports = Product;
