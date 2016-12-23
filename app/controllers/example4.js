import Ember from 'ember';

export default Ember.Controller.extend({
  componentToRender: 'say-hi',

  actions: {
    changeComponent() {
      this.set('componentToRender', 'component-with-set-in-get');
    }
  }
});
