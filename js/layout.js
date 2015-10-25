define(['setup'], function(setup){

  Layout = {
    init: function() {

      var backColor = function(colorName) {
        return { background: colorName };
      }

      var borderColor = backColor('gray');
      var doorColor = 'rgb(255, 255, 139)';

      // Pintando as bordas
      (function fillBorderCells(){
        for(var i = 0; i < b.cols(); i++){
          b.cell([0, i]).style(borderColor);
          b.cell([b.rows()-1, i]).style(borderColor);
        }

        for(var i = 0;i < b.rows(); i++){
          b.cell([i, 0]).style(borderColor);
          b.cell([i, b.cols()-1]).style(borderColor);
        }
      })();

      // Pintando o lugar onde cada personagem inicia
      b.cell([5, 0]).style(backColor('purple'));
      b.cell([0, 16]).style(backColor('red'));
      b.cell([7, b.cols()-1]).style(backColor('yellow'));
      b.cell([18, 0]).style(backColor('blue'));
      b.cell([b.rows()-1, 9]).style(backColor('green'));
      b.cell([b.rows()-1, 14]).style(backColor('white'));

      /* Pintando as Salas */
      function fillRoomColors(linhaInicial, linhaFinal, colunaInicial, rangeDireita){
        for(var i = linhaInicial; i < linhaFinal; i++)
          b.cell([i, colunaInicial], rangeDireita).DOM().forEach(function(el){ el.classList.add('room-cell'); });
      }

      //SALA - STUDY
      fillRoomColors(0, 4, 0, 7);
      //SALA - HALL
      fillRoomColors(0, 7, 9, 6);
      //SALA - LOUNG
      fillRoomColors(0, 6, 17, 7);
      //SALA - LIBRARY
      fillRoomColors(6, 10, 0, 7);
      //SALA - BILLIARD ROOM
      fillRoomColors(11, 17, 0, 6);
      //SALA - CONSERVATORY
      fillRoomColors(19, 24, 0, 6);
      //CENTRO - CLUE
      fillRoomColors(8, 15, 9, 5);
      //SALA - DINING ROOM
      fillRoomColors(9, 15, 16, 7);
      //SALA - BALLROOM
      fillRoomColors(17, 23, 9, 6);
      fillRoomColors(23, 24, 10, 4);
      //SALA - KITCHEN
      fillRoomColors(17, 24, 17, 7);

      /* Pintando as Portas */
      var doorArray = [
        b.cell([3, 5]).DOM(),
        b.cell([4, 9]).DOM(),
        b.cell([6, 11]).DOM(),
        b.cell([6, 12]).DOM(),
        b.cell([5, 18]).DOM(),
        b.cell([9, 18]).DOM(),
        b.cell([12, 16]).DOM(),
        b.cell([8, 6]).DOM(),
        b.cell([9, 3]).DOM(),
        b.cell([11, 1]).DOM(),
        b.cell([15, 5]).DOM(),
        b.cell([19, 5]).DOM(),
        b.cell([19, 9]).DOM(),
        b.cell([19, 14]).DOM(),
        b.cell([17, 10]).DOM(),
        b.cell([17, 13]).DOM(),
        b.cell([17, 18]).DOM()
      ];

      doorArray.forEach(function(doorElement){
        doorElement.style.backgroundColor = doorColor;
        doorElement.classList.remove('room-cell');
      });

    }
  }

  return Layout;
});
