// Initializes the `scoring` service on path `/scoring`
const createService = require('feathers-sequelize');
const createModel = require('../../models/scoring.model');
const hooks = require('./scoring.hooks');
const filters = require('./scoring.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'scoring',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/scoring', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('scoring');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
