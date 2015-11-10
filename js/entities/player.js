define([], function(){

  var Player = function(token){
    this.hand = [];
    this.token = token;
    this.notepad = "";
    this.active = true;
  };

  Player.prototype = Object.create(Player.prototype, {

  });

  return Player;
});
