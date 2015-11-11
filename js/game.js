require(['core/layout', 'core/setup', 'scenes/menu-modal', 'jquery'], function(Layout, Setup, MenuModal, $){
  Game = {
    init: function(){
      Setup.init();
      Layout.init();
      MenuModal.start();
    },

    start: function(){
      Game.turnPlayer.hand.forEach(function(el){
        var text = (function(el){
          if(el.type == "Disciplina"){
            return el.type + ' - ' + el.content;
          }else if (el.type == "Personagem"){
            return el.type + ' - ' + el.content.name;
          }else if (el.type == "Assunto Importante"){
            return el.type + ' - ' + el.content.assunto;
          }
        })(el);

        $('#player-hand').append($('<div>', { class: 'hand-card', name: el.content, text: text }));

        Setup.setTurn();
      });
    },

    rollDice: function(){
      return Math.floor(Math.random() * (6)) + 1;
    }
  };

//test
  document.getElementById('rolar-dado').onclick = function(){
    document.getElementById('msg-resultado-dado').textContent = Game.rollDice();
  };

  Game.init();
});
