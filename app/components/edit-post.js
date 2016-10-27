import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(post) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        date: this.get('date'),
        category: this.get('category'),
        image: this.get('image'),
        abstract: this.get('abstract'),
      };
      this.sendAction('edit', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this Post?')) {
        this.sendAction('deletePost', post);
      }
    }
  }
});
