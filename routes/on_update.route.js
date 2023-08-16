const express = require('express');
const on_update = require('../services/on_update');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnUpdateInlineReqJson = req.body;

  try {
    const result = await on_update.postOnUpdate(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;