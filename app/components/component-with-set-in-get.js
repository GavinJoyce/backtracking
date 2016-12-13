import Ember from 'ember';

export default Ember.Component.extend({
  name: 'Alex',
  otherName: 'Ben',

  reversedName: Ember.computed('name', function() {
    this.set('otherName', 'Sarah'); //this causes the error. don't set withing a get.
    return this.get('name').split('').reverse().join('');
  })
});
