const express = require('express');
const cancel = require('../services/cancel');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postCancelInlineReqJson = req.body;

  try {
    const result = await cancel.postCancel(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;