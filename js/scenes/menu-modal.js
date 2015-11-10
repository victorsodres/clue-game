define(['jquery', 'jquery-ui'], function($){
  var mainModal = $('#main-modal');
  var chooseCharacterModal = $('#choose-character-modal');

  var MainMenu = (function(){

    //Funções Privadas
    buildMainModal = function(){
      var that = this;
      $('#criar-jogo').click(function(){
        mainModal.dialog( "destroy" );
        that.openModal(chooseCharacterModal, { title: 'Escolher Personagem' });
        buildChooseCharactersModal();
      });
    }

    buildChooseCharactersModal = function(){
      $('#iniciar-jogo').click(function(){
        var player = $('input[name=personagens]:checked')[0];
        if (player){
          chooseCharacterModal.dialog( "destroy" );
          Game.turnPlayer = Game.players.filter(function(el){
            return el.token == player.value;
          })[0];
        } else {
          alert('É necessário selecionar um personagem.');
        }
      });
    }

    openModal = function(modal, attrs){
      modal.dialog({
        title: attrs.title,
        draggable: false,
        // height: 500,
        // width: 500,
        dialogClass: "no-close",
        closeOnEscape: false,
        modal: true,
        autoOpen: attrs.autoOpen
      });
    }

    //Funçao publica
    return {
      start: function(){
        buildMainModal();
        openModal(mainModal, { title: 'Menu Inicial', autoOpen: true });
      }
    }
  })();

  return MainMenu;
});
