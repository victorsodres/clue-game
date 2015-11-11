define(['jsboard', 'entities/card', 'entities/player'], function(jsboard, Card, Player){

  window.b = jsboard.board({ attach: "game", size: "25x24" });
  b.cell("each").style({width:"30px", height:"30px", background: "rgb(192, 175, 104)"});

  Setup = {
    init: function() {
      Game.personagens = [

        {
          color: 'red',
          name: 'Stephanie'
        },
        {
          color: 'yellow',
          name: 'Candido'
        },
        {
          color: 'white',
          name: 'Alati'
        },
        {
          color: 'green',
          name: 'Sodre'
        },
        {
          color: 'blue',
          name: 'Igor'
        },
        {
          color: 'purple',
          name: 'Maia'
        }
      ];

      Game.players = (function(){
        var arr = [];
        for(var i = 0; i < Game.personagens.length; i++){
          arr.push(new Player(Game.personagens[i].color))
        };
        return arr;
      })();

      var listaAssuntos = [
        'Padroes de Projeto', 'Paradigmas em Desenvolvimento de Sistemas',
        'Modelagem de Dados', 'Gerencia de Projetos',
        'Teoria da Computacao', 'Processos em TI'
      ];

      Game.assuntosImportantes = listaAssuntos.map(function(el){
        return { assunto: el };
      });

      Game.disciplinas = ["Lógica de Programação", "L.T.P.", "T.A.Z.", "D.B.",
       "Sistemas integrados de Gestão", "Arquitetura de Sistemas",
       "Redes de Computadores", "Arquitetura de Computadores", "Sistemas Operacionais"];

      var playerRed = this.createUniquePiece('red', 'Stephanie');
      var playerYellow = this.createUniquePiece('yellow', 'Candido');
      var playerGreen = this.createUniquePiece('green', 'Sodre');
      var playerPurple = this.createUniquePiece('purple', 'Maia');
      var playerBlue = this.createUniquePiece('blue', 'Igor');
      var playerWhite = this.createUniquePiece('white', 'Alati');

      this.createCards();
      this.setAccusedCards();
      this.distribCards();

      //Colocando peça dos jogadores na posição inicial
      b.cell([5, 0]).place(playerPurple);
      b.cell([0, 16]).place(playerRed);
      b.cell([7, b.cols()-1]).place(playerYellow);
      b.cell([18, 0]).place(playerBlue);
      b.cell([b.rows()-1, 9]).place(playerGreen);
      b.cell([b.rows()-1, 14]).place(playerWhite);

      var players = [playerRed, playerYellow, playerGreen, playerPurple, playerBlue, playerWhite];

      //Give functionality to pieces
      for (var i = 0; i < players.length; ++i) {
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
    },

    createCards: function() {
      Game.cards = [];
      Game.personagens.forEach(function(p){
        Game.cards.push(new Card('Personagem', p));
      });
      Game.assuntosImportantes.forEach(function(p){
        Game.cards.push(new Card('Assunto Importante', p));
      });
      Game.disciplinas.forEach(function(p){
        Game.cards.push(new Card('Disciplina', p));
      });
    },

    scrambleCards: function(cards){
      var aux = cards, temp = [], arraySize = cards.length;
      for (var i = 0; i < arraySize ; i++) {
        temp.push(aux.splice(Math.floor(Math.random() * aux.length), 1)[0]);
      }
      return temp;
    },

    setAccusedCards: function(){
      var accuseds = [];
      var personagensCartas = Game.cards.filter(function(card){
        return card.type == 'Personagem';
      });
      var disciplinasCartas = Game.cards.filter(function(card){
        return card.type == 'Assunto Importante';
      });
      var assuntosCartas = Game.cards.filter(function(card){
        return card.type == 'Disciplina';
      });

      var pers = this.scrambleCards(personagensCartas)[0],
          displ = this.scrambleCards(disciplinasCartas)[0],
          assunto = this.scrambleCards(assuntosCartas)[0];

      accuseds.push(pers);
      accuseds.push(displ);
      accuseds.push(assunto);

      Game.cards = Game.cards.filter(function(card){
        return (card != pers && card != displ && card != assunto)
      });

      Game.accused = accuseds;
    },

    distribCards: function(){
      var scrambledCards = this.scrambleCards(Game.cards);
      Game.players.forEach(function(el){
        el.hand = scrambledCards.splice(0,3);
      });
    }
  };

  return Setup;
});
