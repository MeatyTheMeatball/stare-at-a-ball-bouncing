let speed = 10
let counter = 0
let col = 'yellow'
let bkg = 'black'
let ballX = 40
let rank = "Newbie"

function setup() {
  createCanvas(displayWidth, displayHeight);

}

function draw() {
  
  background(bkg);
  textSize(displayWidth/15)
  text('Bounces: ' + counter, width/3, height/5)
  textSize(displayWidth/30)
  text('Rank: ' + rank, width/width+20,height-20)
  noStroke();
  fill(col);
 ellipse(ballX, height/1.5, 100,100)
  ballX = ballX+speed
  if (ballX < 40 || ballX>width-40) {
    
    counter = counter + 1
    speed=-speed
  }
  if (counter > 199) {
    col = "red"
    rank = "Normie"
    speed = 11
  }
  if (counter > 499){
    col = "green"
    rank = "Regular"
    speed = 13
  }
  if (counter > 999) {
    col = "blue"
    rank = 'Acceptable'
    speed = 16
  }
  if (counter > 2499) {
    col = "purple"
    rank = 'Dedicated'
    speed = 20
  }
  if (counter > 4999) {
    col = "orange"
    rank = 'Time Waster'
    speed = 25
  }
  if (counter > 7499) {
    col = "white"
    rank = 'Why Are You Still Here?'
    speed = 35
  }
  if (counter > 9999) {
    col = "brown"
    rank = 'No Life'
    speed = 50
  }
}