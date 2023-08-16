const express = require('express');
const on_init = require('../services/on_init');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnInitInlineReqJson = req.body;

  try {
    const result = await on_init.postOnInit(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;