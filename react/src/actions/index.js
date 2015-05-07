var Reflux = require('reflux')

var appActions = Reflux.createActions([
  'searchUpdate',
  'loadGame',
  'loadRedir',
  'newRedir'
]);

module.exports = appActions
