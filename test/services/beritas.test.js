const assert = require('assert');
const app = require('../../src/app');

describe('\'beritas\' service', () => {
  it('registered the service', () => {
    const service = app.service('beritas');

    assert.ok(service, 'Registered the service');
  });
});
