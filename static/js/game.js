(function ($) {
  window.PlayerView = Backbone.View.extend({
    el: $("#join"),
    events: {
      "click #add_player": "addPlayer",
    },
    addPlayer: function() {
      var player_name = $("#player_name").val();
    }
  });
  var playerview = new PlayerView;
})(jQuery);
