const assert = require('assert');
const app = require('../../src/app');

describe('\'expert_review\' service', () => {
  it('registered the service', () => {
    const service = app.service('expert_review');

    assert.ok(service, 'Registered the service');
  });
});
