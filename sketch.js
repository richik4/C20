var cat , mouse ;
function preload() {
     garden = loadImage ("images/garden.png");
    //load the images here
    cat1 = loadAnimation ("images/cat1.png")
    cat2 = loadAnimation ("images/cat2.png")
    cat3 = loadAnimation ("images/cat3.png")
    cat4 = loadAnimation ("images/cat4.png")

    mouse1 = loadAnimation ("images/mouse1.png")
    mouse2 = loadAnimation ("images/mouse2.png")
    mouse3 = loadAnimation ("images/mouse3.png")
    mouse4 = loadAnimation ("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600,20,20)
cat.addAnimation("catsleeping",cat1)
cat.scale = 0.2
mouse = createSprite(200,600,20,20)
mouse.addAnimation("mousebringingcheese",mouse1)
mouse.scale = 0.2
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
