const express = require('express');
const on_rating = require('../services/on_rating');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnRatingInlineReqJson = req.body;

  try {
    const result = await on_rating.postOnRating(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;