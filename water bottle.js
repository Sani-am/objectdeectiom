img= "";
status= "";
objects= "";

function preload(){
    img = loadImage('water bottle.jpg');
} 

function setup (){
    canvas=createCanvas(400,600);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
   
}
function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results){
if (error) {
    console.log(error);
    

}
console.log(results);

}

function draw(){
    image(img,0,0,400,600);

}