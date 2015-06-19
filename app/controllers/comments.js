import Ember from "ember";

var CommentsController = {
  needs: ['question'],
  actions: {
    save: function() {
      var question = this.get('controllers.question.model');
      var newAnswer = this.store.createRecord('comment', {
        author: this.get('author'),
        title: this.get('title'),
        answer: this.get('answer')
      });

      newAnswer.save().then(function(){
        question.get('comments').pushObject(newAnswer);
        question.save();
      });

      this.setProperties({
        author: "",
        title: "",
        answer: ""
      });
      this.transitionToRoute('question', question.id);
    }
  }
};

export default Ember.Controller.extend(CommentsController);
