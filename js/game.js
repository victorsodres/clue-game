require(['core/layout', 'core/setup', 'scenes/menu-modal', 'jquery'], function(Layout, Setup, MenuModal, $){
  Game = {
    init: function(){
      Setup.init();
      Layout.init();
      MenuModal.start();
    },

    start: function(){
      Game.turnPlayer.hand.forEach(function(el){
        var text = el.type + ' - ' + el.content
        $('#player-hand').append($('<div>', { class: 'hand-card', name: el.content, text: text }));
      })
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
