var seaImg, shipImg1,sea;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");

}

function setup(){
  createCanvas(400,400);

  createSprite(sea);
  
  sea.addImage(seaImg);
  sea.velocityX = 3;
}

function draw() {
  background("blue");
 
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}
