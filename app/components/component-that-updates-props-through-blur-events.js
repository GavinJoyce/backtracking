import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['propSetOnBlur'],
  propSetOnChange: false,
  propSetOnBlur: false,
  actions: {
    toggleProp() {
      this.toggleProperty('propSetOnChange');
    },
  },
});
