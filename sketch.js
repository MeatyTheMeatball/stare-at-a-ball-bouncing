let speed = 24;
let counter = 0;
let col = "yellow";
let bkg = "black";
let ballX = 40;
let rank = "Newbie";

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(bkg);
  textSize(displayWidth / 15);
  text("Bounces: " + counter, width / 3, height / 5);
  textSize(displayWidth / 30);
  text("Rank: " + rank, width / width + 20, height - 20);
  noStroke();
  fill(col);
  ellipse(ballX, height / 1.5, 100, 100);
  ballX = ballX + speed;
  if (ballX < 40 || ballX > width - 40) {
    counter = counter + 1;
    speed = -speed;
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
}
