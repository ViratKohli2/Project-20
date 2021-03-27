var backImg,back,cat1,mouse1,mouseImg,catImg;
function preload() {
    //load the images here
backImg.loadImage("garden.png");
mouseImg.loadImage("mouse1.png");
catImg.loadImage("cat1.png");

function setup(){
    createCanvas(800,400);
    //create tom and jerry sprites here
back = createSprite(600,600)    
back.addImage("garden",backImg)

cat1 = createSprite(200,40,10,10)
cat1.addImage("cat",catImg)
}

function draw() {
back(255,255,255)
  
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
