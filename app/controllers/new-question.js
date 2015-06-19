import Ember from "ember";

var NewQuestionController = {
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        author: this.get('author'),

      });
      newQuestion.save();
      this.setProperties({
        title: '',
        author: '',

      });
      this.transitionToRoute('questions');
    }
  }
};

export default Ember.Controller.extend(NewQuestionController);
