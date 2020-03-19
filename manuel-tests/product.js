const { shopify } = require("../tests/utils/shopify");

console.log(shopify)

const params = {
  product_type: 'shirts'
}

const listParams = {
  handle: 'second-product'
}


const product = async () => {
  try {
    const productList = await shopify.product.list({})
    console.log(productList)
  } catch ({ response }) {
    console.log(response);
  }
};

product();