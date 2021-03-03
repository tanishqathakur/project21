var canvas;
var music,Bluesquare,yellowsquare,pinksquare,greensquare;
var Box ;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    Bluesquare=createSprite(Random(20,540));
    Bluesquare.shapecolour="Blue";
    yellowsquare=createSprite(Random(30,550));
    yellowsquare.shapecolour="Yellow";
    pinksquare=createSprite(Random(40,450));
    pinksquare.shapecolour="pink";
    greensquare=createSprite(Random(50,350));
    greensquare.shapecolour="green";
   
    //create box sprite and give velocity
    Box=createSprite(10,100);
    Box.shapecolour="White";
    if (keyCode === LEFT_ARROW) {
        Box = x - 5;
      } else if (keyCode === RIGHT_ARROW) {
        Box= x + 5;
      }
      
    
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    //add condition to check if box touching surface and make it box
    if( isTouching(box,Bluesquare)){
      Box.shapeColor="Blue";
      Bluesquare.shapeColor="Blue";
       }
       else{
        Box.shapeColor = "White";
        Bluesquare.shapeColor = "Blue";
       }
       if( isTouching(Box,yellowsquare)){
        Box.shapeColor="Yellow";
        yellowsquare.shapeColor="Yellow";
         }
         else{
          Box.shapeColor = "White";
          yellowsquare.shapeColor = "Yellow";
         }
         if( isTouching(Box,pinksquare)){
          Box.shapeColor="pink";
          pinksquare.shapeColor="pink";
           }
           else{
            box.shapeColor = "White";
            pinksquare.shapeColor = "pink";
           }
           if( isTouching(Box,greensquare)){
            Box.shapeColor="green";
            greensquare.shapeColor="Green";
             } 
             else{
              Box.shapeColor = "White";
              greensquare.shapeColor = "green";
             }
             drawSprites()    
}
