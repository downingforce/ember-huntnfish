import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePost(params) {
      console.log("newpost route:" + params);
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('post', newPost.id);
    }
  }
});
