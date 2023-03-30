import { createChart, updateChart } from "./scatterplot.js"

// Get DOM elements
const predictButton = document.getElementById("btn")
const resultDiv = document.getElementById("result")

// Event listener
predictButton.addEventListener("click", (e) => {
    document.getElementById("field").value
    e.preventDefault()
    makePrediction(+document.getElementById("field").value)
})

const nn = ml5.neuralNetwork({ task: "regression", debug: true })

// Load CSV
function loadData() {
    Papa.parse("./data/cars.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => createNeuralNetwork(results.data),
    })
}

// Create neural network
function createNeuralNetwork(data) {
    // Shuffle
    data.sort(() => Math.random() - 0.5)

    // Add data to neural network
    for (let car of data) {
        nn.addData({ horsepower: car.horsepower }, { mpg: car.mpg })
    }

    // Normalize
    nn.normalizeData()
    plotData(data)
}

// Plot CSV data and start training
function plotData(data) {
    const chartdata = data.map((car) => ({
        x: car.horsepower,
        y: car.mpg,
    }))
    startTraining()
    // Create chartJS
    createChart(chartdata, "Horsepower", "MPG")
}

// Train neural network
function startTraining() {
    nn.train({ epochs: 10 }, () => finishedTraining())
}

async function finishedTraining() {
    let predictions = []
    for (let hp = 40; hp < 250; hp += 2) {
        const pred = await nn.predict({ horsepower: hp })
        predictions.push({ x: hp, y: pred[0].mpg })
    }
    updateChart("Predictions", predictions)
    console.log("Finished training")
}
// Make prediction
async function makePrediction(value) {
    const results = await nn.predict({ horsepower: value })
    resultDiv.innerText = `Estimated usage: ${results[0].mpg}`
}

loadData()