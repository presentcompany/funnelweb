var spiders = require('./spider-agents')
  , browsers = require('./browser-agents')
  , funnelweb = require('../')
  , assert = require('assert');

suite('Funnelweb', function () {
  suite('These User-Agent strings should return true', function () {
    spiders.forEach(function (agent) {
      test(agent, function () {
        assert.ok(funnelweb(agent))
      });
    });
  });
  suite('These User-Agent strings should return false', function () {
    browsers.forEach(function (agent) {
      test(agent, function () {
        assert.ok(!funnelweb(agent))
      });
    });
  });
});
