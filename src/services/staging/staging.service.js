// Initializes the `staging` service on path `/staging`
const createService = require('feathers-sequelize');
const createModel = require('../../models/staging.model');
const hooks = require('./staging.hooks');
const filters = require('./staging.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'staging',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/staging', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('staging');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
