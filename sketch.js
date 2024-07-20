let img;
let myFont;
let sound;
let sound2;
// let strikes = 0
  function preload() {
  myFont = loadFont('./fonts/pressstart.ttf')
  img = loadImage('./image1.png');
  sound = loadSound('./levelup.mp3')
  sound2 = loadSound('./levelup2.mp3')
}

function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}
let xspeed = 15;
let yspeed = 15;
let counter = 0;
let col = "yellow";
let bkg = "black";
let ballX
let ballY
let rank = "Newbie";
let corners = 0
let crank = 'No Satisfaction'

var bouncelvl1reward = false;
var bouncelvl2reward = false;
var bouncelvl3reward = false;
var bouncelvl4reward = false;
var bouncelvl5reward = false;
var bouncelvl6reward = false;
var bouncelvl7reward = false;
var bouncelvl8reward = false;
var bouncelvl9reward = false;
var bouncelvl10reward = false;
var bouncelvl11reward = false;
var bouncelvl12reward = false;
var bouncelvl13reward = false;
var bouncelvl14reward = false;
var bouncelvl15reward = false;
var bouncelvl16reward = false;

var cornerlvl1reward = false;
var cornerlvl2reward = false;
var cornerlvl3reward = false;
var cornerlvl4reward = false;
var cornerlvl5reward = false;
var cornerlvl6reward = false;
var cornerlvl7reward = false;

function checkCornerRewards() {
  if (corners > 9 && !cornerlvl1reward) {
    rewardPlayerCorner("A Little Bit Cool", 5);
    cornerlvl1reward = true;
  }
  if (corners > 24 && !cornerlvl2reward) {
    rewardPlayerCorner("Kinda Awesome", 5);
    cornerlvl2reward = true;
  }
  if (corners > 49 && !cornerlvl3reward) {
    rewardPlayerCorner("Factual", 5);
    cornerlvl3reward = true;
  }
  if (corners > 99 && !cornerlvl4reward) {
    rewardPlayerCorner("Very Lucky", 10);
    cornerlvl4reward = true;
  }
  if (corners > 249 && !cornerlvl5reward) {
    rewardPlayerCorner("Insanely Lucky", 20);
    cornerlvl5reward = true;
  }
  if (corners > 499 && !cornerlvl6reward) {
    rewardPlayerCorner("How?????", 60);
    cornerlvl6reward = true;
  }
  if (corners > 999 && !cornerlvl7reward) {
    rewardPlayerCorner("RNG GOD", 100);
    cornerlvl7reward = true;
}
}

function checkBounceRewards() {
  if (counter > 199 && !bouncelvl1reward) {
    rewardPlayer("red", "Normie", 1);
    bouncelvl1reward = true;
  }
  if (counter > 499 && !bouncelvl2reward) {
    rewardPlayer("green", "Regular", 1);
    bouncelvl2reward = true;
  }
  if (counter > 999 && !bouncelvl3reward) {
    rewardPlayer("blue", "Acceptable", 1);
    bouncelvl3reward = true;
  }
  if (counter > 2499 && !bouncelvl4reward) {
    rewardPlayer("purple", "Dedicated", 2);
    bouncelvl4reward = true;
  }
  if (counter > 4999 && !bouncelvl5reward) {
    rewardPlayer("orange", "Time Waster", 2);
    bouncelvl5reward = true;
  }
  if (counter > 7499 && !bouncelvl6reward) {
    rewardPlayer("white", "Why Are You Still Here?", 2);
    bouncelvl6reward = true;
  }
  if (counter > 9999 && !bouncelvl7reward) {
    rewardPlayer("brown", "No Life", 3);
    bouncelvl7reward = true;
  }
  if (counter > 14999 && !bouncelvl8reward) {
    rewardPlayer("grey", "Go Touch Grass", 3);
    bouncelvl8reward = true;
  }
  if (counter > 19999 && !bouncelvl9reward) {
    rewardPlayer("#513e00", "No Getting Past This", 3);
    bouncelvl9reward = true;
  }
  if (counter > 99999 && !bouncelvl10reward) {
    rewardPlayer("#3298eb", "Holy Crap Just Leave", 3);
    bouncelvl10reward = true;
  }
  if (counter > 149999 && !bouncelvl11reward) {
    rewardPlayer("#f5d64b", "Do You Feel Accomplished Yet?", 4);
    bouncelvl11reward = true;
  }
  if (counter > 249999 && !bouncelvl12reward) {
    rewardPlayer("#e4818a", "Please Give Up...", 4);
    bouncelvl12reward = true;
  }
  if (counter > 374999 && !bouncelvl13reward) {
    rewardPlayer("0da17b", "Stop.", 4);
    bouncelvl13reward = true;
  }
  if (counter > 499999 && !bouncelvl14reward) {
    rewardPlayer("#98cd6c", "Stop!", 4);
    bouncelvl14reward = true;
  }
  if (counter > 749999 && !bouncelvl15reward) {
    rewardPlayer("#bb12ee", "STOP!!!!", 5);
    bouncelvl15reward = true;
  }
  if (counter > 999999 && !bouncelvl16reward) {
    rewardPlayer("#6fbede", "...", 5);
    bouncelvl16reward = true;
  }
}

function rewardPlayer(color, newRank, speedIncrease) {
  col = color;
  rank = newRank;
  yspeed = yspeed > 0 ? yspeed + speedIncrease : yspeed - speedIncrease;
  xspeed = yspeed;
  ballX = width / 2;
  ballY = height / 2;
  sound.play();
}

function rewardPlayerCorner(newCrank, speedIncrease) {
  crank = newCrank;
  yspeed = yspeed > 0 ? yspeed + speedIncrease : yspeed - speedIncrease;
  xspeed = yspeed;
  ballX = width / 2;
  ballY = height / 2;
  sound2.play();
}
   
function anticheat() {
  col = 'red'
  rank = 'Cheater.'
  crank = 'Cheater.'
  xspeed = 0
  yspeed = 0
  ballX = width/2
  ballY = height/2
  bkg = "black"
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  ballX = windowWidth/2
  ballY = windowHeight/2
  }
function draw() {
  imageMode(CENTER)
  resizeCanvas(windowWidth, windowHeight);
  background(bkg);
  image(img, ballX, ballY, width /10, width / 10)
  textSize(width / 20);
  textFont(myFont)
  text("Bounces: " + counter, width / 5, height / 5);
  textSize(width / 35);
  text("Rank: " + rank, width / width + 20, height - 80);
  text('Corners: ' + corners, width/ 3, height/ 3)
  text('Corner Rank: ' + crank, width/width + 20, height - 20)
  /* if (strikes > 0) {
    textSize(width / 50);
    text('Strikes: ' + strikes, width/width + 20, height - 100)
  } */

  noStroke();
  fill(col);
  //ellipse(ballX, ballY, width /13, width / 13);
  ballX = ballX + xspeed;
  ballY = ballY + yspeed
  
  if (ballX <= width/20 || ballX >= width - width/20) {
    counter = counter + 1;
    xspeed = -xspeed;
  }
  if (ballY <= height/20 || ballY >= height - height/20) {
    counter = counter + 1;
    yspeed = -yspeed;
  }
  if (ballX <= width/20 && ballY <= height/20 || ballY >= height - height/20 && ballX >= width - width/20 || ballX <= width/20 && ballY >= height - height/10 || ballX >= width - width/20 && ballY <= height/20) {
    corners = corners + 1
  }
  /* if (ballX > width || ballX < width-width || ballY > height || ballY < height - height) {
    if (strikes == 3) {
      anticheat()
    }
    else {
      ballX = width / 2
      ballY = height / 2
      strikes += 1
    }
  } */
  if (counter > 1000099) {
    col = 'white'
    rank = 'Fine. You Win.'
    xspeed = 0
    yspeed = 0
    ballX = width/2
    ballY = height/2
  }
  if (counter > 1000100) {
    /* col = 'red'
    rank = 'Cheater.'
    crank = 'Cheater.'
    xspeed = 0
    yspeed = 0
    ballX = width/2
    ballY = height/2
    bkg = "black" */
    anticheat()
  }
}
