
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

// Pintando as Salas
function addElementClass(el){
  el.classList.add('room-cell');
}

for(var i = 0; i < 4; i++)
  b.cell([i, 0], 7).DOM().forEach(addElementClass);

for(var i = 0; i < 7; i++)
  b.cell([i, 10], 6).DOM().forEach(addElementClass);
