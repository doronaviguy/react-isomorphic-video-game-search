var Reflux = require('reflux');
var request = require('superagent');
var fs = require('fs');
var appConfig = require('./../config');
var appActions = require('./../actions');


var reidrStore = Reflux.createStore({

  init: function() {
    this.data = {};
    this.listenTo(appActions.newRedir, this.loadRedir)
  },

  loadRedirData: function() {
    var self = this;
    if(this.data) {
      return  self.trigger(self.data);
    }
    fs.readFile('./db.json', function(err, data) {
      if(err) {
        console.log(err);
        return;
      }
      self.data = JSON.parse(data);
      self.trigger(self.data);
    });
    
  }

});

module.exports = reidrStore;