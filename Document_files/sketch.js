// need to use clientX and Y, with mouseX, draws based on mouse pos of the screen. 
const p5iframe = document.querySelector(".p5iframe");
window.addEventListener("mousemove", drawClient);

function setup() {
    setAttributes(alpha, "true");
    createCanvas(400, 300, WEBGL);
}
function drawClient(e) {
    // ellipse(e.clientX, e.clientY, 10,10)
    ellipse(mouseX, mouseY, 10,10)
}
function draw(e) {
    noStroke();
    
    if (mouseIsPressed) {
        fill(0);
    } else {
        noFill();
    }
    drawClient()
}
function keyPressed(e) {
    if(e.key == 'Backspace') {
      background(222);
    }
}

windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
    setAttributes(alpha, "true");
};