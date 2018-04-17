import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('example1');
  this.route('example2');
  this.route('example3');
  this.route('example4');
  this.route('example5');
  this.route('example6');
});

export default Router;
