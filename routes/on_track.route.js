const express = require('express');
const on_track = require('../services/on_track');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOnTrackInlineReqJson = req.body;

  try {
    const result = await on_track.postOnTrack(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;