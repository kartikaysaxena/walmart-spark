const express = require('express');
const on_confirm = require('../services/on_confirm');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnConfirmInlineReqJson = req.body;

  try {
    const result = await on_confirm.postOnConfirm(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;