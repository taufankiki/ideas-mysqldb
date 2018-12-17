// Initializes the `playlist` service on path `/playlist`
const createService = require('feathers-sequelize');
const createModel = require('../../models/playlist.model');
const hooks = require('./playlist.hooks');
const filters = require('./playlist.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'playlist',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/playlist', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('playlist');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
