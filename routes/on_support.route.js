const express = require('express');
const on_support = require('../services/on_support');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnSupportInlineReqJson = req.body;

  try {
    const result = await on_support.postOnSupport(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;