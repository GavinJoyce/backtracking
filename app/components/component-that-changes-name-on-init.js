import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('person.name', 'Ben'); //this causes the backtracking error
  }
});
