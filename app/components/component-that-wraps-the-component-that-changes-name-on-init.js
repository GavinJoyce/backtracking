import Ember from 'ember';

export default Ember.Component.extend({
  showComponent: false,

  actions: {
    toggleComponent() {
      this.toggleProperty('showComponent');
    }
  }
});
