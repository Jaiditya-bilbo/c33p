var snowImage
var snowBg
var snowImg
var snow
var boyImg
var boy
function preload(){
  snowImage = loadImage("snow1.jpg")
  snowImg = loadImage("snow4.webp")
  boyImg = loadImage("images.png")
}
function setup() {
  createCanvas(800,600);
  snowBg = createSprite(400, 300, 100, 100);
  snowBg.addImage(snowImage)
  snowBg.scale = 1.55;

  boy = createSprite(-10, 400, 50, 50)
  boy.addImage(boyImg)
  boy.velocityX = 2;
}

function draw() {
  background("black");  
  spawnSnow();
  drawSprites();
}

function spawnSnow(){
  if(frameCount % 20 === 0){
    var snow = createSprite(780, 1, 1, 1)
    snow.x = Math.round(random(10,700));
    snow.addImage(snowImg)
    snow.scale = 0.2
    snow.velocityY = 5;
  }

  if(boy.position.x > 400){
    boy.velocityX = 0;
  }
}