var bgIMG;
var playIMG;
var gameState = 0;
var player, path1, path2;

function preload()
{
  bgIMG = loadImage("maxresdefault.jpg")
  playIMG = loadImage("play.png")
}

function setup() 
{
  createCanvas(displayWidth, displayHeight)

  // play = createSprite(1200, 100, 100, 100)
  // play.addImage(playIMG)
  // play.scale = 0.5;

  player = createSprite(750, 600, 50, 50)

  path1 = createSprite(500, -displayHeight*6/2, 5, displayHeight*8)
  path2 = createSprite(1000, -displayHeight*6/2, 5, displayHeight*8)
  path3 = createSprite(displayWidth*4/2, -displayHeight*7, displayWidth*4, 5)
}

function draw() {
  background("white");  

  text(mouseX + " , " +mouseY, mouseX, mouseY)

  if(keyDown(RIGHT_ARROW))
  {
    player.position.x += 20;
    camera.x = player.position.x;
    camera.y = displayHeight/2
  }
  if(keyDown(LEFT_ARROW))
  {
    player.position.x -= 20;
    camera.x = player.position.x;
    camera.y = displayHeight/2
  }

  if(keyDown(UP_ARROW))
  {
    player.position.y -= 20;
    camera.x = displayWidth/2
    camera.y = player.position.y;
  }

  if(keyDown(DOWN_ARROW))
  {
    player.position.y += 20;
    camera.x = displayWidth/2
    camera.y = player.position.y;
  }


  // if(gameState === 1)
  // {
  //   background("blue")
  // }
  
  drawSprites();
}