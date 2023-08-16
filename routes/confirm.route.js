const express = require('express');
const confirm = require('../services/confirm');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postConfirmInlineReqJson = req.body;

  try {
    const result = await confirm.postConfirm(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;