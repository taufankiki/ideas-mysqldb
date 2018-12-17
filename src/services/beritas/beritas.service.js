// Initializes the `beritas` service on path `/beritas`
const createService = require('feathers-sequelize');
const createModel = require('../../models/beritas.model');
const hooks = require('./beritas.hooks');
const filters = require('./beritas.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'beritas',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/beritas', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('beritas');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
