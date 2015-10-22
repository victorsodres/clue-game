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

var playerRed = createUniquePiece('red', 'Stéphanie');
var playerYellow = createUniquePiece('yellow', 'Cândido');
var playerGreen = createUniquePiece('green', 'Sodré');
var playerPurple = createUniquePiece('purple', 'Maia');
var playerBlue = createUniquePiece('blue', 'Igor');
var playerWhite = createUniquePiece('white', 'Alati');

b.cell([5, 0]).place(playerPurple);
b.cell([0, 16]).place(playerRed);
b.cell([7, b.cols()-1]).place(playerYellow);
b.cell([18, 0]).place(playerBlue);
b.cell([b.rows()-1, 9]).place(playerGreen);
b.cell([b.rows()-1, 14]).place(playerWhite);
