import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {

      var params = {
        name: this.get('name'),
        url: this.get('url'),
        content: this.get('content'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    },

  }
});
