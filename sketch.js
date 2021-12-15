let speed = 10
let counter = 0
let col = 'yellow'
let bkg = 'black'
let ballX = 40
let rank = "Newbie"

function setup() {
  createCanvas(600, 400);
  
  arcX = -30
  arcY=200
  arcW=70
  arcH=70
  arcS=PI/4
  arcE=7*PI/4
}

function draw() {
  
  background(bkg);
  textSize(50)
  text('Bounces: ' + counter, 175, 75)
  textSize(25)
  text('Rank: ' + rank, 150,350)
  noStroke();
  fill(col);
 ellipse(ballX, height/2, 100,100)
  ballX = ballX+speed
  if (ballX < 40 || ballX>width-40) {
    
    counter = counter + 1
    speed=-speed
  }
  if (counter > 199) {
    col = "red"
    rank = "Normie"
  }
  if (counter > 499){
    col = "green"
    rank = "Regular"
  }
  if (counter > 999) {
    col = "blue"
    rank = 'Acceptable'
  }
}