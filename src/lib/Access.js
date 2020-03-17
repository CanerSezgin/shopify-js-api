class Access {
  constructor(client) {

    /**
   * The AccessScope resource allows you to retrieve the permissions that a merchant has granted to an app
   */
    this.scope = async () => {
      console.log("SCOPE")
    try {
      const method = "get";
      const url = `/admin/oauth/access_scopes.json`;

      const response = await client({ method, url });
      return response.data;
    } catch (error) {
        throw error
      throw createShopifyError(error, this.shop);
    }
  }
  }

  

}

module.exports = Access;
