console.log("JS connected!");

var waldo = document.querySelector('#waldo');
var button = document.querySelector('button');

var self = this;

//increase by 10 pixels
function moveBy10() {
  howManyPixels += 10;
  waldo.style.top = howManyPixels + 'px';
  waldo.style.left = howManyPixels + 'px';
}

function showWaldo() {
  // make waldo visible
  document.getElementById("waldo").style.visibility = 'visible';
}

function hideWaldo() {
  // make waldo invisible
  document.getElementById("waldo").style.visibility = 'hidden';
}

function moveAtRandom() {
  howManyPixelsTop = (Math.random() * 200);
  howManyPixelsLeft = (Math.random() * 800);
  console.log(this);
  hideWaldo();
  // edit this style's top and left
  // hide waldo
  waldo.style.top = howManyPixelsTop + 'px';
  waldo.style.left = howManyPixelsLeft + 'px';
}

function startGame() {
  setTimeout(function() {
    // add event listener to show waldo (show waldo) on mouse enter
  addEventListener('mouseover', showWaldo);
    // hide the button (hint: change style to display none)
  addEventListener('click', moveAtRandom);
  document.getElementById("startGame").style.display = 'none';
  }, 1000)
}

button.addEventListener('click', startGame);
