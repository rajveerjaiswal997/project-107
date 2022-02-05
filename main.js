function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WnHSNzaLO/model.json',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(){
    console.log(error);
    console.log(gotResults);
}