$( document ).ready(function() {
  console.log( 'ready!' );
});
//variables
var redButton = $('.redButton');
var blueButton = $('.blueButton');
var greenButton = $('.greenButton');
var purpleButton = $('.purpleButton');
var container = $('h1.text');
var StartButton = $('.start');
var color = ['red', 'blue', 'green', 'purple'];
var colorstart = color[Math.floor(Math.random() * color.length)];
var turn = 1;
var score = 0;
var entry = $('h1');
var button = $('.button')


//functions
redButton.on('click', function(){
  entry.css({background: 'green'})
})
greenButton.on('click', function(){
  entry.css({background: 'blue'})
})
blueButton.on('click', function(){
  entry.css({background: 'purple'})
})
purpleButton.on('click', function(){
  entry.css({background: 'red'})
})

//start game and keep time
$('.start').click(function(){
  console.log('begin')
  setTimeout(function(){
    alert('time up. Game Over')
  }, 30000)
  container.css({background: colorstart})
})

//Keep score and set next color
$('.button').click(function(){
if(entry.background == container.background) {
  console.log("correct!")
  score++
  } else {
  console.log('incorrect')
  score-3
  }turn++
  container.css({background: colorstart})
})
