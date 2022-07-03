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
            let infoVar = document.getElementById('info');
            infoVar.innerText = "De rosse metselbij is een vrij algemene soort bij. De bij is het best te herkennen aan het harige lijf. Het metselen in de naam komt omdat de bij haar eitjes in gangetjes legt en deze vervolgens dichtmetselt met modder of zand. Je ziet de rosse metselbij veel in de stadse omgeving en de bij leeft in tuinen. Ze zitten ook in bomen met spleten en in muren met scheurtjes erin. Als ze maar ergens iets hebben om ergens een ei in te leggen en dat dicht te maken. Ook op daken met wilde begroeiing is deze bij te vinden.";
        } else { if (results[0].className == "red fox, Vulpes vulpes") {
            let infoVar = document.getElementById('info');
            infoVar.innerText = "De vos is een lid van de hondachtigen, maar heeft ongeveer de grote van een huiskat. De vos heeft over het algemeen een roodbruine vacht, maar kan ook beige tot helderrood zijn, of zilverkleurig tot zwart. Buiten dit hebben ze vaak ook een lange en pluizige staart. ";
        } else {if (results[0].className == "") {
            let infoVar = document.getElementById('info');
            infoVar.innerText = "Egels zijn een belangrijk onderdeel van de kringloop. Ze eten slakken en andere insecten die vaak een plaag vormen in de tuin. Als we de tuin natuurlijker maken, herstelt de biodiversiteit."
        }}
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