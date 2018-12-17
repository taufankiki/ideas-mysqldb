const assert = require('assert');
const app = require('../../src/app');

describe('\'komentars\' service', () => {
  it('registered the service', () => {
    const service = app.service('komentars');

    assert.ok(service, 'Registered the service');
  });
});
