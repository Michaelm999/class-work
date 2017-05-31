var boxes = document.querySelectorAll('#board div')
//establishes which player is X and which is O
var game = {
  player1: 'X',
  player2: 'O'
}
//sets up which player has a turn.
game.currentPlayer = game.player1

//loops through all the boxes
for (var i=0; i < boxes.length; i += 1) {
  boxes[i].addEventListener('click', boxClickHandler)
}
//alternate between each player's turns
function switchTurns() {
  if (game.currentPlayer == game.player1) {
      game.currentPlayer = game.player2
  } else {
    game.currentPlayer = game.player1
  }
}

function boxClickHandler() {
  this.innerText = game.currentPlayer
  switchTurns()
}

//check for victory
fucntion checkForVictory() {
  if 
}
