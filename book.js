book_img= "";
status= "";
objects= ""

function preload(){
    book_img = loadImage('book.jpg');
    console.log("img loaded");
} 

function setup (){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    
}
function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    objectDetector.detect(book_img,gotResult);
}

function gotResult(error, results){
if (error) {
    console.log(error);
    

}
console.log(results);

}

function draw(){
    image(book_img,0,0,640,420);

}