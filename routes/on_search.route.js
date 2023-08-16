const express = require('express');
const on_search = require('../services/on_search');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnSearchInlineReqJson = req.body;

  try {
    const result = await on_search.postOnSearch(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;