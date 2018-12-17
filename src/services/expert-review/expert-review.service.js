// Initializes the `expert_review` service on path `/expert_review`
const createService = require('feathers-sequelize');
const createModel = require('../../models/expert-review.model');
const hooks = require('./expert-review.hooks');
const filters = require('./expert-review.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'expert-review',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/expert_review', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('expert_review');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
