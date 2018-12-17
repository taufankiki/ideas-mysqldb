// Initializes the `komentars` service on path `/komentars`
const createService = require('feathers-sequelize');
const createModel = require('../../models/komentars.model');
const hooks = require('./komentars.hooks');
const filters = require('./komentars.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'komentars',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/komentars', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('komentars');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
