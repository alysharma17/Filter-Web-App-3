nose_x=0;
nose_y=0;

function preload() {
mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    Canvas=createCanvas(450, 450);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    image(video, 0,0, 450,450);
    image(mustache, nose_x, nose_y, 80, 35);

}

function take_snapshot() {
    save('filter.png')
}

function modelLoaded() {

    console.log("PoseNet has loaded!");
}

function gotposes(results) {
    if (results.length>0) {
        console.log(results);
        console.log(" X coordinate of the nose is " +results[0].pose.nose.x );
        console.log(" Y coordinate of the nose is " +results[0].pose.nose.y);

        nose_x = results[0].pose.nose.x-30;
        nose_y = results[0].pose.nose.y+20;
    }
}