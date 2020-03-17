const { getShopify } = require("../tests/utils/shopify");

const shopify = getShopify()
console.log(shopify)

const product = async () => {
  try {
    const productList = await shopify.product.list();
    console.log(productList)
  } catch ({ response }) {
    console.log(response);
  }
};

product();