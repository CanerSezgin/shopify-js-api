const paramProcessor = require("../utils/paramProcessor");

class ScriptTag {
  constructor(client) {
    /**
     * Retrieves a list of all script tags
     * @param {ScriptTagListParams} [params]
     */
    this.list = async params => {
      try {
        console.log("ScriptTag list");
        const method = "get";
        const url = `/admin/api/2020-01/script_tags.json`;
        params = paramProcessor(params);

        const response = await client({ method, url, params });
        return response.data;
      } catch (error) {
        throw error;
        throw createShopifyError(error, this.shop);
      }
    };

    /**
     * Retrieves a count of all script tags
     * @param {ScriptTagListCountParams} [params]
     */
    this.count = async params => {
      try {
        const method = "get";
        const url = `/admin/api/2020-01/script_tags/count.json`;
        params = paramProcessor(params);

        const response = await client({ method, url, params });
        return response.data;
      } catch (error) {
        throw error;
        throw createShopifyError(error, this.shop);
      }
    };

    /**
     * Retrieves a single script tag
     * @param {number} id
     * @param {ScriptTagListSingleParams} [params]
     */
    this.single = async (id, params) => {
      if (!id) throw new Error("ID is missing.");
      try {
        const method = "get";
        const url = `/admin/api/2020-01/script_tags/${id}.json`;
        params = paramProcessor(params);

        const response = await client({ method, url, params });
        return response.data;
      } catch (error) {
        throw error;
        throw createShopifyError(error, this.shop);
      }
    };

    this.create = async data => {
      try {
        const method = "post";
        const url = `/admin/api/2020-01/script_tags.json`;

        const response = await client({ method, url, data });
        return response.data;
      } catch (error) {
        throw error;
        throw createShopifyError(error, this.shop);
      }
    };

    this.update = async (id, data) => {
      try {
        const method = "put";
        const url = `/admin/api/2020-01/script_tags/${id}.json`;

        const response = await client({ method, url, data });
        return response.data;
      } catch (error) {
        throw error;
        throw createShopifyError(error, this.shop);
      }
    };

    this.delete = async (id) => {
      if (!id) throw new Error("ID is missing.");
      try {
        const method = "delete";
        const url = `/admin/api/2020-01/script_tags/${id}.json`;

        const response = await client({ method, url });
        return response.data;
      } catch (error) {
        throw error;
        throw createShopifyError(error, this.shop);
      }
    };
  }
}

module.exports = ScriptTag;
