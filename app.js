import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

//
// DATA
//
const csvFile = "data/mushrooms.csv"
const trainingLabel = "class"  
const ignored = ["population", "class"]  

//
// laad csv data als json
//
function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => trainModel(results.data),   // gebruik deze data om te trainen
    })
}

//
// MACHINE LEARNING - Decision Tree
//
function trainModel(data) {
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)


    // maak het algoritme aan
    let decisionTree = new DecisionTree({
        ignoredAttributes: ignored,
        trainingSet: trainData,
        categoryAttr: trainingLabel
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let visual = new VegaTree('#view', 800, 400, decisionTree.toJSON())


    // TODO : maak een prediction met een sample uit de testdata
    let mushroom = testData[0]
    let mushroomPrediction = decisionTree.predict(mushroom)
    console.log(`Mushroom is: ${mushroomPrediction}`)


    // TODO : bereken de accuracy met behulp van alle test data
    function testMushroom(mushroom) {
    let correct = 0;
    let incorrect = 0;
    let ep = 0;
    let pe = 0;
    let ee = 0;
    let pp = 0;

    for(let mushroom of testData) {
        // kopie van mushroom maken, zonder het label
        const mushroomWithoutLabel = Object.assign({}, mushroom)
        delete mushroomWithoutLabel.class
    
        // prediction
        let prediction = decisionTree.predict(mushroomWithoutLabel)

        // vergelijk de prediction met het echte label
        if (prediction == mushroom.class) {
            console.log("Deze voorspelling is goed gegaan!")
            correct++
        } else {
            console.log("Deze voorspelling is fout gegaan!")
            incorrect++
            
        }

        if(prediction == "e" && mushroom.class == "p") {
            console.log("ep")
            ep++
        }
        if(prediction == "p" && mushroom.class == "e") {
            console.log("pe")
            pe++
        }
        if(prediction == "e" && mushroom.class == "e") {
            console.log("ee")
            ee++
        }
        if(prediction == "p" && mushroom.class == "p") {
            console.log("pp")
            pp++
        }

    }

        let accuracy = correct / testData.length * 100;
        console.log(accuracy + "% accurate!");
        console.log(incorrect + " of " + testData.length +" Incorrect")

        let text = document.getElementById('accuracy');
        
        text.innerText = "Accuracy= " + accuracy + "%"


        // Confusion Matrix
        let mEp = document.getElementById('ep');
        mEp.innerText = ep

        let mPe = document.getElementById('pe');
        mPe.innerText = pe

        let mEe = document.getElementById('ee');
        mEe.innerText = ee

        let mPp = document.getElementById('pp');
        mPp.innerText = pp
    }
    
    testMushroom(testData[0])
}


loadData()
