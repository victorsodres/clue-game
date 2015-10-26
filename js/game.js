require(['layout', 'setup'], function(Layout, Setup){
  Game = {
    init: function(){
      Setup.init();
      Layout.init();
    },

    rollDice: function(){
      return Math.floor(Math.random() * (7 - 1)) + 1
    }
  }

//test
  document.getElementById('rolar-dado').onclick = function(){
    document.getElementById('msg-resultado-dado').textContent = Game.rollDice()
  };

  Game.init();
});
