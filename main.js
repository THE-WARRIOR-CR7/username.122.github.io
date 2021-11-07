
left_wristX=0;
difference=0;
right_wristX=0;
noseX=0;
noseY=0;
function setup() {
    video=createCapture(VIDEO);
 video.size(600,600);
 canvas=createCanvas(600,500);
 canvas.position(700,100);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded() {
console.log("model is loaded");
}
function gotPoses(results) {
if (results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    right_wristX=results[0].pose.rightWrist.x;
  left_wristX=results[0].pose.leftWrist.x;
difference=floor(left_wristX-right_wristX);
}
}
function draw() {
    background("#ff0000");
    fill("blue");
    stroke("darkblue");
    textSize(difference);
    text("  TigerGod_O",noseX,noseY);
}
    