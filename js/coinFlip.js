var flip = false;
function flipImage() {
    var image = document.getElementById("image");
    flip = !flip;
    if (flip) {
        image.style.transform = "rotateY(180deg)";
    } else {
        image.style.transform = "rotateY(0deg)";
    }
}