noseX=0;
noseY=0;
function preload() {
    filter=loadImage('https://i.postimg.cc/HLZxrX3d/mustache.png');
}
function setup() {
    canvas=createCanvas(350, 300);
    canvas.centre();
    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is on!');
}
function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        }
}