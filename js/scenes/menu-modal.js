define(['jquery', 'jquery-ui'], function($){
  var modal = $('#dialog');

  var MainMenu = (function(){
    
    //Funções Privadas
    buildMainModal = function(){
      var that = this;
      var btnIniciarJogo = $('<button>', {id: 'iniciar-jogo', text: 'Iniciar Jogo'})
        .css('margin-left', '30%')
        .css('margin-top', '10%');

      modal.append(btnIniciarJogo);

      btnIniciarJogo.click(function(){
        modal.dialog( "destroy" );
        that.openModal({ title: 'Escolher Personagem' });
        that.cleanModal();
      });
    }

    cleanModal = function(){
      modal.children().remove();
    }

    openModal = function(attrs){
      modal.dialog({
        title: attrs.title,
        draggable: false,
        // height: 500,
        // width: 500,
        dialogClass: "no-close",
        closeOnEscape: false,
        modal: true,
        autoOpen: true
      });
    }

    return {
      start: function(){
        buildMainModal();
        openModal({ title: 'Menu Inicial' });
      }
    }
  })();

  return MainMenu;
});
