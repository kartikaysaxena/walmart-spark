const express = require('express');
const init = require('../services/init');
const router = new express.Router();
 
router.post('/', async (req, res, next) => {
  let options = { 
  };
  console.log(req.body)
  options.postInitInlineReqJson = req.body;

  try {
    const result = await init.postInit(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    console.log(err)
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;