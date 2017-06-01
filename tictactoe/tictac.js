// using querySelectorAll, we can get an entire collection of elements that match the selector.
// since '#board div' includes 9 boxes:
var boxes = document.querySelectorAll('#board div')
 //or, in jquery: var boxes = $('board div')

// an object to make it easy to store information about our game:
var game = {
  player1: 'X',
  player2: 'O'
}

// the game will always start with player1:
game.currentPlayer = game.player1

// loop through each of the boxes
for(var i = 0; i < boxes.length; i += 1) {
  // each box is individually given an event listener,
  // so that when a box is clicked, the boxClickHandler function runs:
  boxes[i].addEventListener('click', boxClickHandler)
}

// FUNCTIONS:

// whenever this function is called, it checks who's turn it currently is,
// and switches to the opposite player:
function switchTurns() {
  if(game.currentPlayer == game.player1) {
    game.currentPlayer = game.player2
  } else {
    game.currentPlayer = game.player1
  }
}


// this is the function that runs whenever a box is clicked:
function boxClickHandler() {
  //deactivate the box's click events
  if(!this.innerText) {

  // set the inner text of the box we just clicked
  // to whatever the currentPlayer's letter is:
  this.innerText = game.currentPlayer
//check for the winner at every turn...before switching
if(checkForVictory()) {
  lockBoard()
  document.querySelector('h1').innerHTML = 'KABOOM! '+game.currentPlayer+' is the Winner!'
}
  // then switch the value of currentPlayer to the opposite player
  // so that the next time this boxClickHandler is run,
  // the opposite letter will be used to mark the box that gets clicked:
  switchTurns()
  }
}

//check for victory
function checkForVictory() {
  var matchedFirstRow = boxes[0].innerText && boxes[0].innerText === boxes[1].innerText && boxes[0].innerText === boxes[2].innerText
  var matchedSecondRow = boxes[3].innerText && boxes[3].innerText === boxes[4].innerText && boxes[3].innerText === boxes[5].innerText
  var matchedThirdRow = boxes[6].innerText && boxes[6].innerText === boxes[7].innerText && boxes[6].innerText === boxes[8].innerText

  var matchedFirstColumn = boxes[0].innerText && boxes[0].innerText === boxes[3].innerText && boxes[0].innerText === boxes[6].innerText
  var matchedSecondColumn = boxes[1].innerText && boxes[1].innerText === boxes[4].innerText && boxes[1].innerText === boxes[7].innerText
  var matchedThirdColumn = boxes[2].innerText && boxes[2].innerText === boxes[5].innerText && boxes[2].innerText === boxes[8].innerText
                            //This is put here so it can check to make sure it isn't an empty string.
  var matchedFirstDiagonal = boxes[0].innerText && boxes[0].innerText === boxes[4].innerText && boxes[0].innerText === boxes[8].innerText
  var matchedSecondDiagonal = boxes[2].innerText && boxes[2].innerText === boxes[4].innerText && boxes[2].innerText === boxes[6].innerText

  if (matchedFirstRow || matchedSecondRow || matchedThirdRow ||
      matchedFirstColumn || matchedSecondColumn || matchedThirdColumn ||
      matchedFirstDiagonal || matchedSecondDiagonal) {
    return true
  }  else {
      return false
  }
}
  function lockBoard() {
    for (var i = 0; i < boxes.length; i += 1) {
      boxes[i].removeEventListener('click', boxClickHandler)
    }
  }
