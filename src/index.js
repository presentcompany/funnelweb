var regex = require('./regex');

module.exports = function funnelweb(string) {
  if (typeof string === 'object') {
    return funnelweb(string.headers['User-Agent'] || string.headers['user-agent']);
  }
  string += '';
  return !!string.match(regex);
};

module.exports.regex = regex;
