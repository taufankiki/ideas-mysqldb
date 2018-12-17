// Initializes the `kategori` service on path `/kategori`
const createService = require('feathers-sequelize');
const createModel = require('../../models/kategori.model');
const hooks = require('./kategori.hooks');
const filters = require('./kategori.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'kategori',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/kategori', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('kategori');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
