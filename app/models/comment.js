import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  url: DS.attr(),
  content: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
});
