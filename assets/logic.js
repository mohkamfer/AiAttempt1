let player = document.createElement('div');
let keys = {};
let LEFT = 37;
let UP = 38;
let RIGHT = 39;
let DOWN = 40;

document.addEventListener('DOMContentLoaded', function() {
  styleDocument();
  stylePlayer();
  appendElements();
  window.onkeyup = function(e) { keys[e.keyCode] = false; }
  window.onkeydown = function(e) { keys[e.keyCode] = true; }
});

requestAnimationFrame(mainLoop);

function mainLoop() {
  let x = parseFloat(player.style.left);
  let y = parseFloat(player.style.top);

  if (keys[LEFT] == true && keys[RIGHT] == true) {
    // Dead state
  } else {
    if (keys[LEFT] == true && x >= 1) {
      player.style.left = x - 3 + 'px';
    }

    if (keys[RIGHT] == true && x < (window.innerWidth) - 16) {
      player.style.left = x + 3 + 'px';
    }
  }

  if (keys[UP] == true && keys[DOWN] == true) {
    // Dead state
  } else {
    if (keys[UP] == true && y >= 1) {
      player.style.top = y - 3 + 'px';
    }

    if (keys[DOWN] == true && y < (window.innerHeight) - 16) {
      player.style.top = y + 3 + 'px';
    }
  }
  
  requestAnimationFrame(mainLoop);
}

function appendElements() {
  document.body.append(player);
}

function stylePlayer() {
  player.style.width = '16px';
  player.style.height = '16px';
  player.style.display = 'block';
  player.style.backgroundColor = 'red';
  player.style.position = 'absolute';
  player.style.top = 0;
  player.style.left = 0;
  player.style.borderRadius = '16px';
}

function styleDocument() {
  document.documentElement.style.width = '100%';
  document.documentElement.style.height = '100%';
  document.documentElement.style.margin = 0;
  document.documentElement.style.padding = 0;
  document.body.style.width = '100%';
  document.body.style.height = '100%';
  document.body.style.margin = 0;
  document.body.style.padding = 0;
}