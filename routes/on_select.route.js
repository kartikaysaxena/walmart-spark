const express = require('express');
const on_select = require('../services/on_select');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnSelectInlineReqJson = req.body;

  try {
    const result = await on_select.postOnSelect(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;