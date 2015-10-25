require(['layout', 'setup'], function(Layout, Setup){
  Game = {
    init: function(){
      Setup.init();
      Layout.init();
    }
  }

  Game.init();
});
