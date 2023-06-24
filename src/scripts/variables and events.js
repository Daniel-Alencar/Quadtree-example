let change = true;
let setupDrawning = false;

const changeService = () => {
  change = !change;
  setupDrawning = false;
}

const getFrameRate = () => {
  const frame = document.querySelector('.frame');
  frame.innerHTML = String("Framerate: " + frameRate());
}

document.addEventListener('DOMContentLoaded', () => {
  const changeButton = document.querySelector('.change-button');
  changeButton.onclick = changeService;

  const frameButton = document.querySelector('.frame-button');
  frameButton.onclick = getFrameRate;
});