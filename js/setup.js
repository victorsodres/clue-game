define(['lib/jsboard'], function(jsboard){

  window.b = jsboard.board({ attach: "game", size: "25x24" });
  b.cell("each").style({width:"30px", height:"30px", background: "rgb(192, 175, 104)"});

  Setup = {
    init: function() {
      var personagens = [
        {
          color: 'red',
          name: 'Stephanie'
        },
        {
          color: 'yellow',
          name: 'Candido'
        },
        {
          color: 'green',
          name: 'Sodre'
        },
        {
          color: 'purple',
          name: 'Maia'
        },
        {
          color: 'blue',
          name: 'Igor'
        },
        {
          color: 'white',
          name: 'Alati'
        }
      ];

      var listaAssuntos = [
        'Padroes de Projeto', 'Paradigmas em Desenvolvimento de Sistemas',
        'Modelagem de Dados', 'Gerencia de Projetos',
        'Teoria da Computacao', 'Processos em TI'
      ];

      var assuntosImportantes = listaAssuntos.map(function(el){
        return { assunto: el };
      });

      var playerRed = this.createUniquePiece('red', 'Stephanie');
      var playerYellow = this.createUniquePiece('yellow', 'Candido');
      var playerGreen = this.createUniquePiece('green', 'Sodre');
      var playerPurple = this.createUniquePiece('purple', 'Maia');
      var playerBlue = this.createUniquePiece('blue', 'Igor');
      var playerWhite = this.createUniquePiece('white', 'Alati');

      //Colocando peça dos jogadores na posição inicial
      b.cell([5, 0]).place(playerPurple);
      b.cell([0, 16]).place(playerRed);
      b.cell([7, b.cols()-1]).place(playerYellow);
      b.cell([18, 0]).place(playerBlue);
      b.cell([b.rows()-1, 9]).place(playerGreen);
      b.cell([b.rows()-1, 14]).place(playerWhite);

      var players = [playerRed, playerYellow, playerGreen, playerPurple, playerBlue, playerWhite];

      //Give functionality to pieces
      for(var i = 0; i < players.length; ++i){
        players[i].addEventListener('click', function(){
          showMoves(this);
        });
      }

      function showMoves(piece){

        resetBoard();
        var thisPiece = b.cell(piece.parentNode).get();
        var newLocs = [];
        var loc;
        loc = b.cell(piece.parentNode).where();

        newLocs.push(
                    [loc[0]-1,loc[1]],   [loc[0]+1,loc[1]],
                    [loc[0],loc[1]-1],   [loc[0],loc[1]+1]
                );

        newLocs = newLocs.filter(function(loc){
          return b.cell(loc).DOM().style.backgroundColor != "gray" && b.cell(loc).DOM().style.backgroundColor != "rgb(211, 211, 211)";
        });

        // remove illegal moves by checking
        // content of b.cell().get()
        (function removeIllegalMoves(arr) {
            var fixedLocs = [];
            for (var i=0; i<arr.length; i++)
                if (b.cell(arr[i]).get()===null)
                    fixedLocs.push(arr[i]);
            newLocs = fixedLocs;
        })(newLocs);

        bindMoveLocs = newLocs.slice();
        bindMovePiece = piece;
        bindMoveEvents(bindMoveLocs);


      }

      // bind move event to new piece locations
      function bindMoveEvents(locs) {
          for (var i=0; i<locs.length; i++) {
              b.cell(locs[i]).DOM().classList.add("green");
              b.cell(locs[i]).on("click", movePiece);
          }
      }

      // actually move the piece
      function movePiece() {
          var userClick = b.cell(this).where();
          if (bindMoveLocs.indexOf(userClick)) {
              b.cell(userClick).place(bindMovePiece);
              resetBoard();
          }
      }

      // remove previous green spaces and event listeners
      function resetBoard() {
          for (var r=0; r<b.rows(); r++) {
              for (var c=0; c<b.cols(); c++) {
                  b.cell([r,c]).DOM().classList.remove("green");
                  b.cell([r,c]).removeOn("click", movePiece);
              }
          }
      }

      b.cell([5, 0]).place(playerPurple);
      b.cell([0, 16]).place(playerRed);
      b.cell([7, b.cols()-1]).place(playerYellow);
      b.cell([18, 0]).place(playerBlue);
      b.cell([b.rows()-1, 9]).place(playerGreen);
      b.cell([b.rows()-1, 14]).place(playerWhite);

      // b.cell("each").on("click", function() {
      //   if (b.cell(this).get() === null)
      //     b.cell(this).place(playerRed);
      //   else
      //     b.cell(this).rid();
      // });
    },

    createUniquePiece: function(color, text){
      return jsboard.piece({
        text: text,
        textIndent:"-9999px",
        background:"url('img/pieces/"+color+".svg') no-repeat",
        width:"20px",
        height:"20px",
        margin:"0 auto",
        "background-size":"contain"
      }).clone();
    }
  }

  return Setup;
});
