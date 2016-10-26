import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', {path: '/posts/:post_id'});
  this.route('newpost', {path: '/posts/new'});
  this.route('editpost', {path: '/posts/:post_id/edit'});

  //this.route('editpost');
});

export default Router;
