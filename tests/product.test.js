const shopify = require('./utils/shopify');

describe('Product API', () => {
    /* let http;
    beforeAll(async () => {
      http = (await withHandshake()).url('api/V1/customer/appleid-login');
    }); */
  
    it('product.list - Retrieve All Products', async () => {
      try {
        const productList = await shopify.product.list()
        console.log(productList)
      } catch ({ response }) {
        console.log(response)
      }
    });
  
  });