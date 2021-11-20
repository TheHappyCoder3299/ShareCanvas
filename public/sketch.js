let socket;
function setup(){
    createCanvas(500,500);
    socket=io("http://localhost:3000");
}

function draw(){
    noStroke();
    fill(255);
    background(255);
    ellipse(mouseX,mouseY,10,10);

}