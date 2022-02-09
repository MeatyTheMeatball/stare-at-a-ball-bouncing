
let img;
let myFont;
  function preload() {
  myFont = loadFont('./fonts/pressstart.ttf')
  img = loadImage('./image1.png');
}

let xspeed = 15;
let yspeed = 15;
let counter = 0;
let col = "yellow";
let bkg = "black";
let ballX = 40;
let ballY = ballX*5;
let rank = "Newbie";
let corners = 0
let crank = 'No Satisfaction'
function setup() {
  createCanvas(displayWidth, displayHeight);

}

function draw() {
  background(bkg);
  image(img, ballX, ballY, width /10, width / 10)
  textSize(displayWidth / 15);
  textFont(myFont)
  text("Bounces: " + counter, width / 5, height / 5);
  textSize(displayWidth / 35);
  text("Rank: " + rank, width / width + 20, height - 80);
  text('Corners: ' + corners, width/ 3, height/ 3)
  text('Corner Rank: ' + crank, width/width + 20, height - 20)
  noStroke();
  fill(col);
  //ellipse(ballX, ballY, width /13, width / 13);
  ballX = ballX + xspeed;
  ballY = ballY + yspeed
  if (ballX < 10 || ballX > width - 100) {
    counter = counter + 1;
    xspeed = -xspeed;
  }
  if (ballY < 0 || ballY > height - 100) {
    counter = counter + 1;
    yspeed = -yspeed;
  }
  if (ballX < 10 && ballY < 0 || ballY > height - 100 && ballX > width - 100 || ballX < 10 && ballY > height - 100 || ballX > width - 100 && ballY < 0) {
    corners = corners + 1
  }
  if (corners > 9) {
    crank = 'A Little Bit Cool'
  }
  if (corners > 24) {
    crank = 'Kinda Awesome'
  }
  if (corners > 49) {
    crank = 'Factual'
  }
  if (corners > 99) {
    crank = 'Very Lucky'
  }
  if (corners > 249) {
    crank = 'Insanely Lucky'
  }
  if (corners > 499) {
    crank = "How?????"
  }
  if (corners > 999) {
    crank = 'RNG GOD'
  }
  if (counter > 199) {
    col = "red";
    rank = "Normie";
  }
  if (counter > 499) {
    col = "green";
    rank = "Regular";
  }
  if (counter > 999) {
    col = "blue";
    rank = "Acceptable";
  }
  if (counter > 2499) {
    col = "purple";
    rank = "Dedicated";
  }
  if (counter > 4999) {
    col = "orange";
    rank = "Time Waster";
  }
  if (counter > 7499) {
    col = "white";
    rank = "Why Are You Still Here?";
  }
  if (counter > 9999) {
    col = "brown";
    rank = "No Life";
  }
  if (counter > 14999) {
    col = "grey";
    rank = "Go Touch Grass";
}
  if (counter > 19999) {
    col = '#513e00'
    rank = 'No Getting Past This' 
  }
  if (counter > 99999) {
    col = '#3298eb'
    rank = 'Holy Crap Just Leave'
  }
  if (counter > 149999) {
    col = '#f5d64b'
    rank = 'Do You Feel Accomplished Yet?'
  }
  if (counter > 249999) {
    col = '#e4818a'
    rank = 'Please Give Up...'
  }
  if (counter > 374999) {
    col = '#0da17b'
    rank = 'Stop.'
  }
  if (counter > 499999) {
    col = '#98cd6c'
    rank = 'Stop!'
  }
  if (counter > 749999) {
    col = '#bb12ee'
    rank = 'STOP!!!!'
  }
  if (counter > 999999) {
    col = '#6fbede'
    rank = '...'
  }
  if (counter > 1000099) {
    col = 'white'
    rank = 'Fine. You Win.'
    xspeed = 0
    yspeed = 0
    ballX = width/2
    ballY = height/2
    
  }
}