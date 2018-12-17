const assert = require('assert');
const app = require('../../src/app');

describe('\'staging\' service', () => {
  it('registered the service', () => {
    const service = app.service('staging');

    assert.ok(service, 'Registered the service');
  });
});
