var drawing=[];
var currentPath=[];
var database;
var button;
function setup() {
  canvas=createCanvas(400, 400);
  database=firebase.database();
  canvas.mousePressed(startPath);
  //canvas.mousereleased(endPath);
}
function startPath(){
    currentPath=[];
    drawing.push(currentPath);    
    database.ref('/').set({
      "drawing":drawing

    })

}
function endPath(){
  //currentPath=[];
    //drawing.push(currentPath);    
    database.ref('/').set({
      "drawing":0
    })
  //  drawing.push(currentpath);
}
function draw() {
    background(0);
      button=createButton("clear");
      button.position(350,450);
      //if(mousePressed===button){
      //  endPath();
     // }
     button.mousePressed(()=>{
       endPath();
     });
    if(mouseIsPressed){
    
        var point={
            x:mouseX,
            y:mouseY
        }
        currentPath.push(point);
        }


stroke(255);
strokeWeight(4);
noFill();

for (var i=0;i<drawing.length;i++){
  beginShape();
    var path=drawing[i];

    for(var j=0;j<path.length;j++){
     vertex(path[j].x,path[j].y)
}   

endShape();   
}
}