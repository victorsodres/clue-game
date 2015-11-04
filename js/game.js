require(['layout', 'setup', 'jquery', 'jquery-ui'], function(Layout, Setup, $){
  Game = {
    init: function(){
      Setup.init();
      Layout.init();
      this.openModal();
    },

    rollDice: function(){
      return Math.floor(Math.random() * (7 - 1)) + 1
    },

    openModal: function(){
      $( "#dialog" ).dialog({
        dialogClass: "no-close",
        autoOpen: true
      });
    }
  }

//test
  document.getElementById('rolar-dado').onclick = function(){
    document.getElementById('msg-resultado-dado').textContent = Game.rollDice()
  };

  Game.init();
});
