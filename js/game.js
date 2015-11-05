require(['layout', 'setup', 'scenes/menu-modal'], function(Layout, Setup, MenuModal){
  Game = {
    init: function(){
      Setup.init();
      Layout.init();
      MenuModal.start();
    },

    rollDice: function(){
      return Math.floor(Math.random() * (6)) + 1
    }
  };

//test
  document.getElementById('rolar-dado').onclick = function(){
    document.getElementById('msg-resultado-dado').textContent = Game.rollDice()
  };

  Game.init();
});
