var scores = {}; //paara llevar el registro de los jugadores y sus puntos.

//
function createPlayer(object, name) {
  object[name.toLowerCase()] = 0;
  console.log(object);
}

function addPoints(name, points) {
  scores[name.toLowerCase()] += points;
  console.log(scores);
}

function printOfPoints() {
  var arrayPlayers = Object.keys(scores);
  var resultados = "";
  for(var k=0; k<arrayPlayers.length; k++){
    if (k == arrayPlayers.length -1 ) { //se verifica que estemos en el ultimo index
    resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]];
  }else {
    resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]] +', ';
  }
  //  console.log(resultados);
  }
  return resultados;
//  console.log(arrayPlayers);
}

createPlayer(scores, "Ana");
addPoints("ana", 20);
addPoints("ana", 40);
createPlayer(scores, "silvana");
addPoints("silvana", 50);
printOfPoints();
console.log(printOfPoints());
