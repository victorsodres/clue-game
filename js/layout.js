
function backColor(colorName) {
  return { background: colorName };
}

// Pintando as bordas
for(var i = 0; i < b.cols(); i++){
  b.cell([0, i]).style(backColor('gray'));
  b.cell([b.rows()-1, i]).style(backColor('gray'));
}

for(var i = 0;i < b.rows(); i++){
  b.cell([i, 0]).style(backColor('gray'));
  b.cell([i, b.cols()-1]).style(backColor('gray'));
}

// Pintando o lugar onde cada personagem inicia
b.cell([5, 0]).style(backColor('purple'));
b.cell([0, 16]).style(backColor('red'));
b.cell([7, b.cols()-1]).style(backColor('yellow'));
b.cell([18, 0]).style(backColor('blue'));
b.cell([b.rows()-1, 9]).style(backColor('green'));
b.cell([b.rows()-1, 14]).style(backColor('white'));

/* Pintando as Salas */
function addElementClass(el){
  el.classList.add('room-cell');
}

function fillRoomColors(linhaInicial, linhaFinal, colunaInicial, rangeDireita){
  for(var i = linhaInicial; i < linhaFinal; i++)
    b.cell([i, colunaInicial], rangeDireita).DOM().forEach(addElementClass);
}

//SALA - STUDY
fillRoomColors(0, 4, 0, 7);

//SALA - HALL
fillRoomColors(0, 7, 9, 6);

//SALA - LOUNG
fillRoomColors(0, 6, 17, 7);

//SALA - LIBRARY
fillRoomColors(6, 10, 0, 7);

// //SALA - BILLIARD ROOM
// fillRoomColors(10, 16, 0, 6);
// //SALA - CONSERVATORY
// fillRoomColors(15, 20, 0, 6);
// //SALA - DINING ROOM
// fillRoomColors(11, 16, 0, 6);
//
// //SALA - BALLROOM
// fillRoomColors(6, 10, 0, 7);
//
// //SALA - KITCHEN
// fillRoomColors(6, 10, 0, 7);
