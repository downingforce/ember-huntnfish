import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    edit(post, params) {
    console.log(post);
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        post.set(key, params[key]);
      }
    });
    post.save();
    this.transitionTo('post', post.id);
    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
