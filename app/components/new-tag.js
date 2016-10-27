import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTag() {
      var params = {
        tag: this.get('tag'),
        post: this.get('post')
      };
      this.sendAction('saveTag', params);
    },
  }
});
