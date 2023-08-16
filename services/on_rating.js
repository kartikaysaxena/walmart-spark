module.exports = {
  /**
  * Provide feedback on a service

  * @param options.postOnRatingInlineReqJson.context required
  * @param options.postOnRatingInlineReqJson.errorDescribes an error object that is returned by a BAP, BPP or BG as a response or callback to an action by another network participant. This object is sent when any request received by a network participant is unacceptable. This object can be sent either during Ack or with the callback.
  * @param options.postOnRatingInlineReqJson.message required

  */
  postOnRating: async (options) => {

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

    var data = 

      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
