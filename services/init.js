module.exports = {
  /**
  * Initialize an order by providing billing and/or shipping details

  * @param options.postInitInlineReqJson.context required
  * @param options.postInitInlineReqJson.message required

  */
  postInit: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "error": "<Error>",
        "message": "<object>",
      },

      status = '200';

    return {
      status: '200',
      data: data
    };  
  },
};
