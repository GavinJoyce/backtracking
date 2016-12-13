import Ember from 'ember';

export default Ember.Component.extend({
  count: 0,

  init() {
    this._super(...arguments);
    this.get('onCountChange')(this.get('count'));
  },

  actions: {
    increment() {
      this.incrementProperty('count');
      this.get('onCountChange')(this.get('count'));
    },
    decrement() {
      this.decrementProperty('count');
      this.get('onCountChange')(this.get('count'));
    },
  }
});
