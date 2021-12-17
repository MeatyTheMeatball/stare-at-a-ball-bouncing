
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
  textSize(displayWidth / 15);
  text("Bounces: " + counter, width / 3, height / 5);
  textSize(displayWidth / 30);
  text("Rank: " + rank, width / width + 20, height - 80);
  text('Corners: ' + corners, width/ 3, height/ 3)
  text('Corner Rank: ' + crank, width/width + 20, height - 20)
  noStroke();
  fill(col);
  ellipse(ballX, ballY, 100, 100);
  ballX = ballX + xspeed;
  ballY = ballY + yspeed
  if (ballX < 40 || ballX > width - 40) {
    counter = counter + 1;
    xspeed = -xspeed;
  }
  if (ballY < 40 || ballY > height - 40) {
    counter = counter + 1;
    yspeed = -yspeed;
  }
  if (ballX <40 && ballY < 40 || ballY > height - 40 && ballX > width - 40 || ballX <40 && ballY > height - 40 || ballX > width - 40 && ballY < 40) {
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
}