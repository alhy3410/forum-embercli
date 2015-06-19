import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  author: attr('string'),
  title: attr('string'),
  answer: attr('string'),
  question: DS.belongsTo('question', {async: true})
});
