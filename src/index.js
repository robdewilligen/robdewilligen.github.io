import kNear from "./knear/main.js";

let model
let videoWidth, videoHeight
let ctx, canvas

let pose = []
let prediction = []
let label = document.querySelector('#label')

const log = document.querySelector('#array')
const train = document.querySelector('#train')
const classify = document.querySelector('#classify')
const setText = document.querySelector('#prediction')
const res = document.querySelector('#computer')

const VIDEO_WIDTH = 720
const VIDEO_HEIGHT = 405

const k = 3
const machine = new kNear(k)

train.addEventListener('click', trainModel)
classify.addEventListener('click', classifyView)

// start de applicatie
async function main(){
    model = await handpose.load()
    const video = await setupCamera()
    video.play()
    startLandmarkDetection(video)
}

// start de webcam
async function setupCamera(){
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
        throw new Error(
            'Webcam not available'
        )
    }

    const video = document.getElementById('video')
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: 'user',
            width: VIDEO_WIDTH,
            height: VIDEO_HEIGHT
        }
    })
    video.srcObject = stream

    return new Promise(resolve => {
        video.onloadedmetadata = () => {
            resolve(video)
        }
    })
}


// predict de vinger posities in de video stream
async function startLandmarkDetection(video){

    videoWidth = video.videoWidth
    videoHeight = video.videoHeight

    canvas = document.getElementById('output')

    canvas.width = videoWidth
    canvas.height = videoHeight

    ctx = canvas.getContext('2d')

    video.width = videoWidth
    video.height = videoHeight

    ctx.clearRect(0, 0, videoWidth, videoHeight)
    ctx.strokeStyle = 'red'
    ctx.fillStyle = 'red'

    ctx.translate(canvas.width, 0)
    ctx.scale(-1, 1) // video omdraaien omdat webcam in spiegelbeeld is

    predictLandmarks()
}

// predict de locatie van de vingers met het model
async function predictLandmarks(){
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight, 0, 0, canvas.width, canvas.height)
    // prediction!
    let predictions = await model.estimateHands(video) // ,true voor flip
    if(predictions.length > 0){
        drawHand(ctx, predictions[0].landmarks, predictions[0].annotations)
        // console.log(predictions[0])
        prediction = predictions[0].landmarks
    }
    // 60 keer per seconde is veel, gebruik setTimeout om minder vaak te predicten
    requestAnimationFrame(predictLandmarks)
    // setTimeout(() => predictLandmarks(), 500)
}

function trainModel(){
    // console.log('training')
    // console.log("PREDICTION", prediction)
    if(prediction){
        for (let item of prediction) {
            // console.log('TRAINED', item[0], item[1])

            pose.push(item[0], item[1])
        }
        // console.log("PUSHED", label.value, pose)
    } else {
        console.log('no prediction')
    }

    machine.learn(pose, label.value)
    pose = []
}

function classifyView(){
    if(prediction){
        for (let item of prediction) {

            pose.push(item[0], item[1])
        }
    } else {
        console.log('no prediction')
    }

    let predictedPose = machine.classify(pose)
    console.log(predictedPose)
    setText.innerHTML = predictedPose

    switch (predictedPose){
        case ("paper") :
            console.log("I chose scissors, you lose!")
            res.innerHTML = "I chose scissors, you lose!"
            break;
        case ("rock") :
            console.log("I chose paper, you lose!")
            res.innerHTML = "I chose paper, you lose!"
            break;
        case ("scissors") :
            console.log("I chose rock, you lose!")
            res.innerHTML = "I chose rock, you lose!"
            break;

    }
}

// teken hand en vingers met de x,y coordinaten. de z waarde tekenen we niet.
function drawHand(ctx, keypoints, annotations){
    // toon alle x,y,z punten van de hele hand in het log venster
    log.innerText = keypoints.flat()

    // punten op alle kootjes kan je rechtstreeks uit keypoints halen
    for(let i = 0; i < keypoints.length; i++){
        const y = keypoints[i][0]
        const x = keypoints[i][1]
        drawPoint(ctx, x - 2, y - 2, 3)
    }

    // palmbase als laatste punt toevoegen aan elke vinger
    let palmBase = annotations.palmBase[0]
    for(let key in annotations){
        const finger = annotations[key]
        finger.unshift(palmBase)
        drawPath(ctx, finger, false)
    }
}

//
// teken een punt
//
function drawPoint(ctx, y, x, r){
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fill()
}

//
// teken een lijn
//
function drawPath(ctx, points, closePath){
    const region = new Path2D()
    region.moveTo(points[0][0], points[0][1])
    for(let i = 1; i < points.length; i++){
        const point = points[i]
        region.lineTo(point[0], point[1])
    }

    if(closePath){
        region.closePath()
    }
    ctx.stroke(region)
}

//
// start
//
main()