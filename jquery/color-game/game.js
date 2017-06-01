//variables
var redButton = $('.redButton');
var blueButton = $('.blueButton');
var greenButton = $('.greenButton');
var purpleButton = $('.purpleButton');
var StartButton = $('.start');
var color = ['red', 'blue', 'green', 'purple'];
var colorstart = function() {
  return color[Math.floor(Math.random() * color.length)]
};
var turn = 1;
var score = 0;
var entry = $('h1');
var button = $('.button');


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
  $('h1').text(colorstart())
  setTimeout(function(){
    alert("Your score is "+score)}, 30000)
});

//Keep score and set next color
button.click(function() {
  if (entry.text === button.text) {
  console.log("correct!")
  score+=1
  }
  else {
  console.log('incorrect')
  score-=3
  }
  $('h1').text(colorstart())
});
