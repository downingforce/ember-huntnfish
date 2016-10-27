import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    editPost(model) {
      this.transitionTo('editpost', model.id);
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
    },

    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this review?')) {
        comment.destroyRecord();
      }
    }

  }

});
