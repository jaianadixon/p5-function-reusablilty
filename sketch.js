var x= 300;
var y=200;
var img;

function setup(){
    createCanvas(600,400);
    background(255,0,0);
}

function draw(){
    flower(x,y);
    flower(100,100);
    flower(100,300);
    flower(300,200);
    if(mouseIsPressed){
        flower(mouseX,mouseY);
    }
}

function flower(x,y){
    //steam
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    //petals
    noStroke();
    fill(255,150,200);
    ellipse(x+10,y-10,35,35);
    ellipse(x+10,y+10,35,35);
    ellipse(x-10,y-10,35,35);
    ellipse(x-10,y+10,35,35);
    
    //bulb
    fill(255,100,0);
    ellipse(x,y,25,25);

}  