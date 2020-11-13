var boy,boyImg;
function preload(){
    boyImg=loadImage("walking_2.png")
}

function setup(){
    createCanvas(400, 800);
    background(22,20,21)
    boy=createSprite(250,600,50,100)
    boy.addImage(boyImg)
    boy.scale=0.5
}

function draw(){
    drawSprites()
}   

