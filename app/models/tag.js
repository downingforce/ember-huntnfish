import DS from 'ember-data';

export default DS.Model.extend({
  tag: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
