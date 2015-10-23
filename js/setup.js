var b = jsboard.board({ attach: "game", size: "25x24" });

function createUniquePiece(color, text){
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

var card = new Card('personagem', { hue: 'hue'});

var playerRed = createUniquePiece('red', 'Stephanie');
var playerYellow = createUniquePiece('yellow', 'Candido');
var playerGreen = createUniquePiece('green', 'Sodre');
var playerPurple = createUniquePiece('purple', 'Maia');
var playerBlue = createUniquePiece('blue', 'Igor');
var playerWhite = createUniquePiece('white', 'Alati');

b.cell([5, 0]).place(playerPurple);
b.cell([0, 16]).place(playerRed);
b.cell([7, b.cols()-1]).place(playerYellow);
b.cell([18, 0]).place(playerBlue);
b.cell([b.rows()-1, 9]).place(playerGreen);
b.cell([b.rows()-1, 14]).place(playerWhite);