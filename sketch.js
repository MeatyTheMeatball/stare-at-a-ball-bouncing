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
  if (corners > 9) {
    crank = 'A Little Bit Cool'
    if (cornerlvl1reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 5
        xspeed = yspeed
      } else {
        yspeed = yspeed - 5
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound2.play()
      cornerlvl1reward = true
    }
  }
  if (corners > 24) {
    crank = 'Kinda Awesome'
    if (cornerlvl2reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 5
        xspeed = yspeed
      } else {
        yspeed = yspeed - 5
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound2.play()
      cornerlvl2reward = true
    }
  }
  if (corners > 49) {
    crank = 'Factual'
    if (cornerlvl3reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 5
        xspeed = yspeed
      } else {
        yspeed = yspeed - 5
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound2.play()
      cornerlvl3reward = true
    }
  }
  if (corners > 99) {
    crank = 'Very Lucky'
    if (cornerlvl4reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 10
        xspeed = yspeed
      } else {
        yspeed = yspeed - 10
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound2.play()
      cornerlvl4reward = true
    }
  }
  if (corners > 249) {
    crank = 'Insanely Lucky'
    if (cornerlvl5reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 20
        xspeed = yspeed
      } else {
        yspeed = yspeed - 20
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound2.play()
      cornerlvl5reward = true
    }
  }
  if (corners > 499) {
    crank = "How?????"
    if (cornerlvl6reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 60
        xspeed = yspeed
      } else {
        yspeed = yspeed - 60
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound2.play()
      cornerlvl6reward = true
    }
  }
  if (corners > 999) {
    crank = 'RNG GOD'
    if (cornerlvl7reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 100
        xspeed = yspeed
      } else {
        yspeed = yspeed - 100
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound2.play()
      cornerlvl7reward = true
    }
  }
  if (counter > 199) {
    col = "red";
    rank = "Normie";
    if (bouncelvl1reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 1
        xspeed = yspeed
      } else {
        yspeed = yspeed - 1
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl1reward = true
    }
  }
  if (counter > 499) {
    col = "green";
    rank = "Regular";
    if (bouncelvl2reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 1
        xspeed = yspeed
      } else {
        yspeed = yspeed - 1
        xspeed = yspeed
      }
      sound.play()
      bouncelvl2reward = true
    }
  }
  if (counter > 999) {
    col = "blue";
    rank = "Acceptable";
    if (bouncelvl3reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 1
        xspeed = yspeed
      } else {
        yspeed = yspeed - 1
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl3reward = true
    }
  }
  if (counter > 2499) {
    col = "purple";
    rank = "Dedicated";
    if (bouncelvl4reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 2
        xspeed = yspeed
      } else {
        yspeed = yspeed - 2
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl4reward = true
    }
  }
  if (counter > 4999) {
    col = "orange";
    rank = "Time Waster";
    if (bouncelvl5reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 2
        xspeed = yspeed
      } else {
        yspeed = yspeed - 2
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl5reward = true
    }
  }
  if (counter > 7499) {
    col = "white";
    rank = "Why Are You Still Here?";
    if (bouncelvl6reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 2
        xspeed = yspeed
      } else {
        yspeed = yspeed - 2
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl6reward = true
    }
  }
  if (counter > 9999) {
    col = "brown";
    rank = "No Life";
    if (bouncelvl7reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 3
        xspeed = yspeed
      } else {
        yspeed = yspeed - 3
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl7reward = true
    }
  }
  if (counter > 14999) {
    col = "grey";
    rank = "Go Touch Grass";
    if (bouncelvl8reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 3
        xspeed = yspeed
      } else {
        yspeed = yspeed - 3
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl8reward = true
    }
}
  if (counter > 19999) {
    col = '#513e00'
    rank = 'No Getting Past This' 
    if (bouncelvl9reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 3
        xspeed = yspeed
      } else {
        yspeed = yspeed - 3
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl9reward = true
    }
  }
  if (counter > 99999) {
    col = '#3298eb'
    rank = 'Holy Crap Just Leave'
    if (bouncelvl10reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 3
        xspeed = yspeed
      } else {
        yspeed = yspeed - 3
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl10reward = true
    }
  }
  if (counter > 149999) {
    col = '#f5d64b'
    rank = 'Do You Feel Accomplished Yet?'
    if (bouncelvl11reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 4
        xspeed = yspeed
      } else {
        yspeed = yspeed - 4
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl11reward = true
    }
  }
  if (counter > 249999) {
    col = '#e4818a'
    rank = 'Please Give Up...'
    if (bouncelvl12reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 4
        xspeed = yspeed
      } else {
        yspeed = yspeed - 4
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl12reward = true
    }
  }
  if (counter > 374999) {
    col = '#0da17b'
    rank = 'Stop.'
    if (bouncelvl13reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 4
        xspeed = yspeed
      } else {
        yspeed = yspeed - 4
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl13reward = true
    }
  }
  if (counter > 499999) {
    col = '#98cd6c'
    rank = 'Stop!'
    if (bouncelvl14reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 4
        xspeed = yspeed
      } else {
        yspeed = yspeed - 4
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl14reward = true
    }
  }
  if (counter > 749999) {
    col = '#bb12ee'
    rank = 'STOP!!!!'
    if (bouncelvl15reward == false) {
      if (yspeed > 0) {
        yspeed = yspeed + 5
        xspeed = yspeed
      } else {
        yspeed = yspeed - 5
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl15reward = true
    }
  }
  if (counter > 999999) {
    col = '#6fbede'
    rank = '...'
    if (bouncelvl16reward == false) {
      if (yspeed > 0) {
        yspeed = 5
        xspeed = yspeed
      } else {
        yspeed = -5
        xspeed = yspeed
      }
      ballX = width / 2
      ballY = height / 2
      sound.play()
      bouncelvl16reward = true
    }
  }
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
