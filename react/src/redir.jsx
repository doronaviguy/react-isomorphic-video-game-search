/** @jsx React.DOM */
'use strict'

var React = require('react/addons');
var Reflux = require('reflux');
var DocumentTitle = require('react-document-title');
var reactAsync = require('react-async');
var Link = require('react-router-component').Link;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var appActions = require('./actions'); 
var redirStore = require('./stores/redirStore');


var Redir = React.createClass({
  mixins: [reactAsync.Mixin, Reflux.ListenerMixin],

  getInitialStateAsync: function(cb) {
    
    // redirStore.listen(function(data) {
    //   try {
    //     return cb(null, {
    //       game: data
    //     });
    //   } catch(err) { }
    // });
  },

  componentDidMount: function() {
    // this.listenTo(redirStore, this.newRedir)
    // appActions.loadRedir();
  },
  render: function() {
    
    //var list = (<div>demo reidr</div>);

    return (
      <div>
        <h2>redir</h2>


        <div key="game-detail" className="game-detail clearfix">
          <h1 ref="gameTitle" key="game-title" className="game-title">hi</h1>
          {'list'}
        </div>
      </div>
    );
  }

})


module.exports = <Redir />