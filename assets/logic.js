let player = document.createElement('div');
let enemy = document.createElement('div');
let keyList = {};

let LEFT = 37;
let KeyA = 65;
let UP = 38;
let KeyW = 87;
let RIGHT = 39;
let KeyD = 68;
let DOWN = 40;
let KeyS = 83;
let SHIFT = 16;

document.addEventListener('DOMContentLoaded', function() {
  styleDocument();
  appendElements();
  stylePlayer();
  styleEnemy();
  window.onkeyup = function(e) { keyList[e.keyCode] = false; }
  window.onkeydown = function(e) { keyList[e.keyCode] = true; }
});

requestAnimationFrame(mainLoop);

function mainLoop() {
  let playerStyle = player.style;
  let x = parseFloat(playerStyle.left);
  let y = parseFloat(playerStyle.top);
  let newOffset = 3;

  if (shiftPressed())
  newOffset += 3;

  if (!(leftPressed() && rightPressed())) {
    if (leftPressed() && (x >= 1)) {
      playerStyle.left = x - newOffset + 'px';
    }

    if (rightPressed() && x < (window.innerWidth) - 16) {
      playerStyle.left = x + newOffset + 'px';
    }
  }

  if (!(upPressed() && downPressed())) {
    if (upPressed() && (y >= 1)) {
      playerStyle.top = y - newOffset + 'px';
    }

    if (downPressed() && y < (window.innerHeight) - 16) {
      playerStyle.top = y + newOffset + 'px';
    }
  }

  checkBoundaries(x, y);

  requestAnimationFrame(mainLoop);
}

function appendElements() {
  document.body.append(player);
  document.body.append(enemy);
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

function styleEnemy() {
  enemy.style.height = '16px';
  enemy.style.width = '16px';
  enemy.style.display = 'block';
  enemy.style.backgroundColor = 'blue';
  enemy.style.position = 'absolute';
  enemy.style.left = (window.innerWidth / 2) + 'px';
  enemy.style.top = (window.innerHeight / 2) + 'px';
  enemy.style.borderRadius = '16px';
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

function checkBoundaries(x, y) {
  if (x < 0)
    player.style.left = 0;

  if (x >= (window.innerWidth - 15))
    player.style.left = (window.innerWidth - 16) + 'px';

  if (y < 0)
    player.style.top = 0;

  if (y >= (window.innerHeight - 15))
    player.style.top = (window.innerHeight - 16) + 'px';
}

function leftPressed() { return (keyList[LEFT] == true) || (keyList[KeyA] == true); }
function upPressed() { return (keyList[UP] == true) || (keyList[KeyW] == true); }
function rightPressed() { return (keyList[RIGHT] == true) || (keyList[KeyD] == true); }
function downPressed() { return (keyList[DOWN] == true) || (keyList[KeyS] == true); }
function shiftPressed() { return keyList[SHIFT] == true; }