img=""
status=""
function preload() {
    img=loadImage("dog_cat.jpg")
}
function setup() {
    canvas=createCanvas(600,400)
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML="detecting objects"
}
function modelloaded() {
    console.log("modelisloaded")
    status=true
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results) {
if(error) {
  console.error(error)  
}
else{console.log(results)}
}
function draw() {
image(img,0,0,600,400)
if(status!=""){
    for(i=0;i<objects.length;i++)
    {
        document.getElementById("status").innerHTML="status:object detected"
        fill("red")
        percent=floor(objects[i].confidence*100)
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y)
        noFill()
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)

    
}
}
}

    