//Create variables here

var dog
var happyDog
var database
var foodS
var foodStock
var dogIMG
var happyDogIMG

function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png")
	happyDogIMG = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,202,20);
  dog.addImage(dogIMG);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  
  drawSprites();
  //add styles here

  textSize(15);
  fill("white");
  stroke("white");
  text("Note: Press UP_ARROW Key To Feed Dog Milk!",250,100);
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}



