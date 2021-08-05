var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeLeaf, orangeImg;
var redLeaf, redImg;

function preload(){
  //precargan las imagenes
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeaf = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
//agrega la imagen
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
// le da un tamaño al sprite
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  //para que el conejo se mueva con el mouse 
  rabbit.x=World.mouseX
  
  //selecciona un numero al azar entre el 1 y el 3
  var select_sprites = Math.round(random(1,3));
    
  
  //llama a las funciones despues de 80 cuadros
  if (frameCount % 80 === 0){
    //llama a la funcion createApples
    if(select_sprites == 1){
      createApples();
    }
    else if (select_sprites == 2){
      //llama a la funcion createOrange
      createOrange();
    }
    else {
      //Llama a la funcion createRed
      createRed();
    }
  }

function createApples(){
  //crea el sprite
  apple = createSprite(random(50,350),40,10,10);
  // le agrega la imagen
  apple.addImage(appleImg);
  //le da el tamaño
  apple.scale= 0.1;
  //le da velocidad
  apple.velocityY = 3;
  // le da un ciclo de vida
  apple.lifetime = 150;
}
  
  function createOrange(){
    orangeL = createSprite(random(50,350),40,10,10);
    orangeL.addImage(orangeLeaf);
    orangeL.scale = 0.1;
    orangeL.velocityY = 3;
    orangeL.lifetime = 150;
  }
  
  function createRed(){
    redL = createSprite(random(50,350),40,10,10);
    redL.addImage(redImg);
    redL.scale = 0.1;
    redL.velocityY = 3;
    redL.lifetime = 150;
  }
  

  drawSprites();
}