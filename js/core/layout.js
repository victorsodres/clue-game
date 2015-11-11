define(['core/setup'], function(setup){

  Layout = {
    init: function() {
      var borderColor = this.backColor('gray');
      var doorColor = 'rgb(255, 255, 139)';

      // Pintando as bordas
      this.fillBorderCells(borderColor);

      // Pintando o lugar onde cada personagem inicia
      b.cell([5, 0]).style(this.backColor('purple'));
      b.cell([0, 16]).style(this.backColor('red'));
      b.cell([7, b.cols()-1]).style(this.backColor('yellow'));
      b.cell([18, 0]).style(this.backColor('blue'));
      b.cell([b.rows()-1, 9]).style(this.backColor('green'));
      b.cell([b.rows()-1, 14]).style(this.backColor('white'));




      /* Pintando as Salas */
      //SALA - STUDY
      this.fillRoomColors(0, 4, 0, 7);
      //SALA - HALL
      this.fillRoomColors(0, 7, 9, 6);
      //SALA - LOUNG
      this.fillRoomColors(0, 6, 17, 7);
      //SALA - LIBRARY
      this.fillRoomColors(6, 10, 0, 7);
      //SALA - BILLIARD ROOM
      this.fillRoomColors(11, 17, 0, 6);
      //SALA - CONSERVATORY
      this.fillRoomColors(19, 24, 0, 6);
      //CENTRO - CLUE
      this.fillRoomColors(8, 15, 9, 5);
      //SALA - DINING ROOM
      this.fillRoomColors(9, 15, 16, 7);
      //SALA - BALLROOM
      this.fillRoomColors(17, 23, 9, 6);
      this.fillRoomColors(23, 24, 10, 4);
      //SALA - KITCHEN
      this.fillRoomColors(17, 24, 17, 7);

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
      });

      b.cell([9, 10]).style(this.backColor('black'));
      b.cell([9, 11]).style(this.backColor('black'));
      b.cell([9, 12]).style(this.backColor('black'));
      b.cell([10, 10]).style(this.backColor('black'));
      b.cell([10, 12]).style(this.backColor('black'));
      b.cell([11, 11]).style(this.backColor('black'));
      b.cell([11, 12]).style(this.backColor('black'));
      b.cell([12, 11]).style(this.backColor('black'));
      b.cell([14, 11]).style(this.backColor('black'));


    },

    fillBorderCells: function(borderColor){
      for(var i = 0; i < b.cols(); i++){
        b.cell([0, i]).style(borderColor);
        b.cell([b.rows()-1, i]).style(borderColor);
      }

      for(var i = 0;i < b.rows(); i++){
        b.cell([i, 0]).style(borderColor);
        b.cell([i, b.cols()-1]).style(borderColor);
      }
    },

    fillRoomColors: function(linhaInicial, linhaFinal, colunaInicial, rangeDireita){
      for(var i = linhaInicial; i < linhaFinal; i++)
        b.cell([i, colunaInicial], rangeDireita).DOM().forEach(function(el){
          el.style.background = 'lightgrey';
        });
    },

    backColor: function(colorName) {
      return { background: colorName };
    }

  }

  return Layout;
});
