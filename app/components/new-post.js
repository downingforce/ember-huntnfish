import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    savePost() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        date: this.get('date'),
        tags: this.get('tags'),
        category: this.get('category'),
        image: this.get('image'),
        abstract: this.get('abstract'),
      };
      this.sendAction('savePost', params);
    }
  }
});
