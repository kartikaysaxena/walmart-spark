const express = require('express');
const on_cancel = require('../services/on_cancel');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnCancelInlineReqJson = req.body;

  try {
    const result = await on_cancel.postOnCancel(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;