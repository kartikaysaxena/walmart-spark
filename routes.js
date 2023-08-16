module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/cancel', require('./routes/cancel.route'));
  app.use('/confirm', require('./routes/confirm.route'));
  app.use('/init', require('./routes/init.route'));
  app.use('/on_cancel', require('./routes/on_cancel.route'));
  app.use('/on_confirm', require('./routes/on_confirm.route'));
  app.use('/on_init', require('./routes/on_init.route'));
  app.use('/on_rating', require('./routes/on_rating.route'));
  app.use('/on_search', require('./routes/on_search.route'));
  app.use('/on_select', require('./routes/on_select.route'));
  app.use('/on_status', require('./routes/on_status.route'));
  app.use('/on_support', require('./routes/on_support.route'));
  app.use('/on_track', require('./routes/on_track.route'));
  app.use('/on_update', require('./routes/on_update.route'));
  app.use('/rating', require('./routes/rating.route'));
  app.use('/search', require('./routes/search.route'));
  app.use('/select', require('./routes/select.route'));
  app.use('/status', require('./routes/status.route'));
  app.use('/support', require('./routes/support.route'));
  app.use('/track', require('./routes/track.route'));
  app.use('/update', require('./routes/update.route'));

};
