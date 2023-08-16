const express = require('express');
const on_status = require('../services/on_status');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnStatusInlineReqJson = req.body;

  try {
    const result = await on_status.postOnStatus(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;