  var bgImg,sc1I,sc2I,sc3I,sc4I,issI;
  var bgImg,sc,sc2,sc3,sc4,iss;


  function preload(){
      bgImg=loadImage("spacebg.jpg");
      sc2= loadAnimation("spacecraft2.png","spacecraft3.png","spacecraft2.png","spacecraft3.png"
      ,"spacecraft4.png")
      
      sc3= loadImage("spacecraft1.png");
      issI=loadImage("iss.png");
    }




  function setup() {
    createCanvas(1000,1800);
    iss=createSprite(500,280,50,50)
    iss.addImage(issI)
iss.scale=1.75;

    sc=createSprite(700,800,50,50)
    sc.addAnimation("sc animation",sc2)
    sc.scale=0.50;
  }

  function draw() {
    background(bgImg,1000,1900,1000,1900);  



if (keyDown(UP_ARROW)){
  //sc.velocityY=sc.velocityY-5;
sc.y=sc.y-5;
}
if (keyDown(DOWN_ARROW)){
  //sc.velocityY=sc.velocityY-5;
sc.y=sc.y+5;
}

if (keyDown(LEFT_ARROW)){
  //sc.velocityY=sc.velocityY-5;
sc.x=sc.x-5;
}

if (keyDown(RIGHT_ARROW)){
  //sc.velocityY=sc.velocityY-5;
sc.x=sc.x+5;
}
//sc=sc.x +  Random(-1,1);

if(sc.y<=(iss.y-70)&&sc.x<=(iss.x-10)){
hasDocked=true;
textSize(25)
fill("white")
textSize("DOCKING SUCCESSFUL",700,800);

}

    drawSprites();
  }