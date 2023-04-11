import kNear from './knear/main.js'

window.addEventListener('load', loadData)
const k = 3;
const machine = new kNear(k)

let gap = document.getElementById('gap')
let depth = document.getElementById('depth')
let btn = document.getElementById('btn')
let predictionSpan = document.getElementById('prediction')

btn.addEventListener("click", handlePred)

// Load data
function loadData() {
    Papa.parse("./data/Significant_Earthquakes.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => createKNN(results.data),
    })
}

// Create KNN
function createKNN(data){
    let preppedData = prepData(data)

    // Split data
    let trainData = preppedData.slice(0, Math.floor(preppedData.length * 0.8));
    let testData = preppedData.slice(Math.floor(preppedData.length * 0.8) + 1);

    // Add data to KNN
    for(let quake of trainData){
        machine.learn(
            quake.depthAndGap,
            quake.type
        );
    }
}

function prepData(data) {
    return data
        .filter((quake) => quake.depth != null && quake.gap != null && quake.type != null)
        .map((quake) => ({
            depthAndGap: [quake.depth, quake.gap],
            type: quake.type
        }))
}

async function handlePred() {
    predictionSpan.innerHTML = await machine.classify([depth.value * 1, gap.value * 1])
}

