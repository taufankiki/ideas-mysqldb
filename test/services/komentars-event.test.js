const assert = require('assert');
const app = require('../../src/app');

describe('\'komentars_event\' service', () => {
  it('registered the service', () => {
    const service = app.service('komentars_event');

    assert.ok(service, 'Registered the service');
  });
});
