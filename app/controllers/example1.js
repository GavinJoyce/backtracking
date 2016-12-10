import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Alex',
  showComponent: false,

  actions: {
    toggleComponent() {
      this.toggleProperty('showComponent');
    }
  }
});
