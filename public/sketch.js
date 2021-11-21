let socket;
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);
    socket=io("http://localhost:3000");
    socket.on('mouse',(data)=>{
        noStroke();
        fill(255,100,59);
        ellipse(data.x,data.y,8,8);
    });
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
    ellipse(mouseX,mouseY,8,8);

    let data={
        x:mouseX,
        y:mouseY
    };  

    socket.emit('mouse',data);
}

//I don't know why this didn't work 
//The compiler doesn't understand 'on'
// socket.on('mouse',(data)=>{
//     noStroke();
//     fill(255);
//     ellipse(data.x,data.y,2,2);
// });

