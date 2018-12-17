const assert = require('assert');
const app = require('../../src/app');

describe('\'scoring\' service', () => {
  it('registered the service', () => {
    const service = app.service('scoring');

    assert.ok(service, 'Registered the service');
  });
});
