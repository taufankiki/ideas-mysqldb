// Initializes the `komentars_event` service on path `/komentars_event`
const createService = require('feathers-sequelize');
const createModel = require('../../models/komentars-event.model');
const hooks = require('./komentars-event.hooks');
const filters = require('./komentars-event.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'komentars-event',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/komentars_event', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('komentars_event');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
