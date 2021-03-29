 var cat1,cat1Img
 var cat2,cat2Img
 var cat3,cat3Img
 var cat4,cat4Img
 var tom
 var jerry
 var mouse1,mouse1Img
 var mouse2,mouse2Img
 var mouse3,mouse3Img
 var mouse4,mouse4Img
var garden,gardenImg
function preload() {
    //load the images here
    cat1Img=loadImage("cat1.png")
     mouse1Img=loadAnimation("mouse2.png","mouse3.png")
     mouse2Img=loadImage("mouse1.png")
     mouse4Img=loadAnimation("mouse4.png")
     
     cat3Img=loadImage("cat4.png")
     cat2Img=loadAnimation("cat2.png","cat3.png")
gardenImg=loadImage("garden.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom=createSprite(800,600,20,20)
 tom.addImage("tom",cat1Img)
 tom.scale=0.1
  jerry=createSprite(200,600,20,20)
  jerry.scale=0.1
 jerry.addImage("mouse",mouse2Img)


}
    




function draw() {
   console.log(jerry.position.x) 
    background(gardenImg);

    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x < (tom.width-jerry.width)/2) {

    tom.velocityX=0
    tom.addAnimation("final",cat3Img)
    tom.changeAnimation("final")
     tom.x=300
    jerry.addAnimation("found",mouse4Img)
    jerry.changeAnimation("found")


      }
      else {
        tom.shapeColor="green"
        jerry.shapeColor="green"
      }
    
//keyPressed();
    drawSprites();
}

function keyPressed( ){
   
if (keyCode===LEFT_ARROW) {
    tom.velocityX=-3
    tom.addAnimation("moving",cat2Img)
    tom.changeAnimation("moving")

    jerry.addAnimation("stand",mouse1Img)
    jerry.changeAnimation("stand")
}
if (tom.x > jerry.x) {
    tom.velocityX=-3
}

if (tom.isTouching(jerry)) {
    tom.velocityx=0
}
}

function isTouching(tom,jerry) {


    if (tom.x - jerry.x < jerry.width/2 + tom.width/2
      && jerry.x - tom.x < jerry.width/2 + tom.width/2
      && tom.y - jerry.y < jerry.height/2 + tom.height/2
      && jerry.y - tom.y < jerry.height/2 + tom.height/2) {
   // movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
  
  
    return true
  }
  
  else {
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
  
    return false
  }
  }
  
  
  function bounceoff( tom,jerry) {
    if ( tom.x - jerry.x < jerry.width/2 +  tom.width/2
      && jerry.x - object1.x < jerry.width/2 +  tom.width/2) {
  
        tom.velocityX=(-1)* tom.velocityX
  tom.addAnimation("sitting",cat3Img)
        tom.changeAnimation("sitting")
        return true
      }
  else {
    return false
  }
  }



  function collide( tom,jerry) {
    if ( tom.x - jerry.x < jerry.width/2 +  tom.width/2
        && jerry.x -  tom.x < jerry.width/2 +  tom.width/2) {
            
            tom.velocityX=0
            return true
        }
      }
