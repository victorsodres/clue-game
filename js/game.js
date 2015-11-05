require(['layout', 'setup', 'jquery', 'jquery-ui'], function(Layout, Setup, $){
  Game = {
    init: function(){
      Setup.init();
      Layout.init();
      this.openModal();
    },

    rollDice: function(){
      return Math.floor(Math.random() * (6)) + 1
    },

    openModal: function(){
      $( "#dialog" ).dialog({

        closeOnEscape: false,
        //open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); },
        modal: true,
        // buttons: {
        //   Ok: function() {
        //     $( this ).dialog( "close" );
        //   }
        // },
        autoOpen: true
      });

      $('#btnIniciar').click(function(){
        $( "#dialog" ).dialog("close");
        $( "#choose" ).dialog({

          closeOnEscape: false,
          open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); },
          modal: true,
          // buttons: {
          //   Ok: function() {
          //     $( this ).dialog( "close" );
          //   }
          // },
          autoOpen: true
        });
      });
    }
  };

//test
  document.getElementById('rolar-dado').onclick = function(){
    document.getElementById('msg-resultado-dado').textContent = Game.rollDice()
  };

  Game.init();
});
