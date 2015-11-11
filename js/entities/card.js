/** Class Card

Três Tipos de Cartas:
  - Personagem
  - Assunto Importante
  - Matéria

@type String
@content Object
*/

define([], function(){
  var Card = function(type, content){
    this.type = type;
    this.content = content;
  };

  return Card;
});
