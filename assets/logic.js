var player = document.createElement('div');

document.addEventListener('DOMContentLoaded', function() {
  styleDocument();
  stylePlayer();
  appendElements();
});

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