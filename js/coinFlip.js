let btnFlip = document.getElementById("flip");
let btnStop = document.getElementById("stop");


var angle = 0;
var flip = false;

btnFlip.addEventListener("click", function() {
  flip = true;
  rotateCoin();  
  this.style.display="none";
  flipResult.style.display="none";
  btnStop.style.display = "inline-block";
});

btnStop.addEventListener("click", function() {
  flip = false;
  this.style.display = "none";
  btnFlip.style.display = "inline-block";
  flipResult.style.display="inline-block";

  var result = Math.random() < 0.5 ? "heads" : "tails";
  document.getElementById("coin").src ="./images/"+ result + ".jpeg";
  flipResult.innerHTML = `<h1> ${result}! </h1>`
});

function rotateCoin() {
  if (flip) {
    angle += 180;
    document.getElementById("coin").style.transform = "rotateY(" + angle + "deg)";
    if(angle%360 === 0){
      document.getElementById("coin").src ="./images/tails.jpeg";
    }
    else{
      document.getElementById("coin").src ="./images/heads.jpeg";
    }
    setTimeout(rotateCoin, 100);
  }
}