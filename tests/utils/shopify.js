const ShopifyAPI = require('../../src/index');
const testCredentials = {
    shop: 'dev-store-demo-pr',
    accessToken: 'c9985f4bb1f42a514ebda9486f08076a'
}

const getShopify = () => new ShopifyAPI(testCredentials.shop, testCredentials.accessToken);
module.exports = {
    testCredentials,
    getShopify
}