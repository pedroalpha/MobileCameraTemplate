
// The Video2
let Video2;
// For displaying the label
let label = "Carregando o modelo...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/VqRXy2aS/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(450, 450);
  // Create the Video2
  Video2 = createCapture(Video2);
  Video2.hide();

  // STEP 2: Start classifying
  classifyVideo2();
}

// STEP 2 classify the videeo!
function classifyVideo2() {
  classifier.classify(Video2, gotResults);
}

function draw() {
  background(0);

  // Draw the Video2
  image(Video2, 0, 0);


  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);


}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo2();
}