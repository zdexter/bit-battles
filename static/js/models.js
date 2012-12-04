var Player = Backbone.Model.extend({
  promptName: function() {
    var name = prompt("Please enter a player name:");
    this.set({name: name});
  }
});
