import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    countChanged(count) {
      this.set('latestCount', count);
    }
  }
});
