let mobilenet;
let video;
let label = '';
let bee = 0;
let butterfly = 0;

function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
    console.error(error);
    } else {
    console.log(results);
    label = results[0].label;
    mobilenet.predict(gotResults);
    let text = document.getElementById('text');
    text.innerText = results[0].className

        if(results[0].className == "bee") {
            bee++;
            let BeeVar = document.getElementById('bee');
            BeeVar.innerText = "Bee's = " + bee;
            console.log("bee++")
        } else if(results[0].className == "butterfly") {
            butterfly++;
            let ButterflyVar = document.getElementById('butterfly')
            ButterflyVar.innerText = "Butterflies = " + butterfly; 
            console.log("butterfly++")
        }
    }
}

function setup() {
    createCanvas(640, 550);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
    let title = document.getElementById('title')
    title.innerText = "Live View";
}

function draw() {
    background(0);
    image(video, 0, 0);
    fill(255);
    textSize(32);
    text(label, 10, height - 20);
}