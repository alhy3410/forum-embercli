import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("questions", {path: '/'});
  this.resource("question", { path: 'questions/:question_id'}, function(){
    this.resource("comments");
  });
  this.resource("new-question");
  this.resource("comment", { path: 'comments/:comment_id'});
});

export default Router;
