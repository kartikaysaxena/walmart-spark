const express = require('express');
const select = require('../services/select');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postSelectInlineReqJson = req.body;

  try {
    const result = await select.postSelect(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;