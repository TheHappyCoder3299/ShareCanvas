let socket;
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);
    socket=io("http://localhost:3000");
}

function draw(){
    // noStroke();
    // fill(255);
    // ellipse(mouseX,mouseY,10,10);
    if(keyIsPressed){
        background(0);
    }
}

function mouseDragged(){
    noStroke();
    fill(255);
    ellipse(mouseX,mouseY,2,2);
}


