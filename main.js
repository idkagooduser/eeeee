Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    image_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML="<img id='CapturedImage' src='"+data_uri+"'>";
});


}

console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mZA8x4yhk/model.json',modelLoaded)

function modelLoaded(){
    console.log("Model Loaded🥳");
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data_1="The first prediction is"+ prediction_1;
    speak_data_2="And the second prediction is"+ prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img=document.getElementById('CapturedImage');
    classifier.classify(img,gotResults);
}

function gotResults(error,results){
    if (error){
console.log(error);
    }
    else{
        console.log(results);
        document.getElementById('result_emotion_name').innerHTML=results[0].label;
        document.getElementById('result_emotion_name2').innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="Thumbs up"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(results[0].label=="Thumbs down"){
            document.getElementById("update_emoji").innerHTML="&#128078;";
        }
        if(results[0].label=="Peace"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(results[0].label=="Ok"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(results[0].label=="Punch"){
            document.getElementById("update_emoji").innerHTML="&#128074;";
        }
        if(results[0].label=="Hand up"){
            document.getElementById("update_emoji").innerHTML="&#128400;";
        }

        if(results[1].label=="Thumbs up"){
            document.getElementById("update_emoji2").innerHTML="&#128077;";
        }
        if(results[1].label=="Thumbs down"){
            document.getElementById("update_emoji2").innerHTML="&#128078;";
        }
        if(results[1].label=="Peace"){
            document.getElementById("update_emoji2").innerHTML="&#9996;";
        }
        if(results[1].label=="Ok"){
            document.getElementById("update_emoji2").innerHTML="&#128076;";
        }
        if(results[1].label=="Punch"){
            document.getElementById("update_emoji2").innerHTML="&#128074;";
        }
        if(results[1].label=="Hand up"){
            document.getElementById("update_emoji2").innerHTML="&#128400;";
        }

        
    }
}
