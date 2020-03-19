const { shopify } = require("../tests/utils/shopify");

console.log(shopify)

const params = {
  product_type: 'shirts'
}

const listParams = {
  //handle: 'second-product',
  ids: [4395580260487, 4397513015431]
}


const product = async () => {
  try {
    const productList = await shopify.product.list(listParams)
    console.log(productList)
  } catch ({ response }) {
    console.log(response);
  }
};

class ScriptTag {
  /**
   * ScriptTag Class for POST | PUT payloads
   * @param {string} src 
   * @param {"all"|"online_store"|"order_status"} display_scope 
   */
  constructor (src, display_scope) {
    this.script_tag = {
      event: 'onload',
      src,
      display_scope
    }
    // if there is no value, remove key from payload
    Object.keys(this.script_tag).forEach(key => {
      if(!this.script_tag[key]){
        delete this.script_tag[key]
      }
    });
  }
}

const scriptTag = async () => {
  try {
    //const a = await shopify.scriptTag.list()
    // const a = await shopify.scriptTag.count()
    //const a = await shopify.scriptTag.single(121502531719, {fields: ['src', 'event']})
    // const a = await shopify.scriptTag.create(new ScriptTag("https://form.jotform.com/200774468125962"))
    const x = new ScriptTag(null, 'online_store')
    const a = await shopify.scriptTag.update(121505316999, x)
    //const a = await shopify.scriptTag.delete(121503318151)
    console.log(a)
  } catch ({ response }) {
    console.log(response.data.errors);
  }
};

scriptTag();