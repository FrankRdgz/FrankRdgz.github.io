var angle = 0;
var flip = false;

function startFlip() {
  flip = true;
  rotateCoin();
}

function stopFlip() {
  flip = false;
  var result = Math.random() < 0.5 ? "heads" : "tails";
  document.getElementById("coin").src ="./images/"+ result + ".jpeg";
}

function rotateCoin() {
  if (flip) {
    angle += 180;
    document.getElementById("coin").style.transform = "rotateY(" + angle + "deg)";
    setTimeout(rotateCoin, 400);
  }
}