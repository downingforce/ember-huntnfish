import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string'),
  date: DS.attr('string'),
  tags: DS.attr('string'),
  category: DS.attr('string'),
  image: DS.attr('string'),
  abstract: DS.attr('string'),
  comments: DS.hasMany('comment', { async: true })
});
