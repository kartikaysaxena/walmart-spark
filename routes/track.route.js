const express = require('express');
const track = require('../services/track');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postTrackInlineReqJson = req.body;

  try {
    const result = await track.postTrack(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;