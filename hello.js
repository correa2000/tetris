function setup()
{
    createCanvas(400,400);   
}

function draw()
{
    draw0Square();  
    draw1Square();
    draw2Square();
    draw3Square();
    draw4Square();
    draw5Square();
    draw6Square();
}

function drawSquare(x,y,len,color){
    fill(color);
    beginShape();
    vertex(x,y);
    vertex(x+len,y);
    vertex(x+len,y+len);
    vertex(x,y+len);
    endShape(CLOSE);
}
function draw0Square(){
    drawSquare(15,15,20,"yellow");
    drawSquare(15,35,20,"yellow");
    drawSquare(35,15,20,"yellow");
    drawSquare(35,35,20,"yellow");
}
function draw1Square(){
    drawSquare(100,15,20,"turquoise");
    drawSquare(100,35,20,"turquoise");
    drawSquare(100,55,20,"turquoise");
    drawSquare(100,75,20,"turquoise");
}
function draw2Square(){
    drawSquare(155,35,20,"red");
    drawSquare(175,35,20,"red");
    drawSquare(175,15,20,"red");
    drawSquare(195,15,20,"red");
}
function draw3Square(){
    drawSquare(255,15,20,"green");
    drawSquare(275,15,20,"green");
    drawSquare(275,35,20,"green");
    drawSquare(295,35,20,"green");
}
function draw4Square(){
    drawSquare(60,130,20,"orange");
    drawSquare(60,150,20,"orange");
    drawSquare(60,170,20,"orange");
    drawSquare(80,170,20,"orange");
}
function draw5Square(){
    drawSquare(160,170,20,"pink");
    drawSquare(180,170,20,"pink");
    drawSquare(180,150,20,"pink");
    drawSquare(180,130,20,"pink");
}
function draw6Square(){
    drawSquare(250,150,20,"purple");
    drawSquare(270,150,20,"purple");
    drawSquare(270,170,20,"purple");
    drawSquare(290,150,20,"purple");
}




   