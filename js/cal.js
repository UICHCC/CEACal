function ALFormToScore(){
    var levelText = document.getElementById('ALScore').value;
    var levelArray = levelText.split("");
    var levelScore = 0;
    for (var i = 0; i < levelArray.length; i += 1){
        if (levelArray[i] === "A"){
            levelScore += 75;
        }else if (levelArray[i] === "B"){
            levelScore += 64;
        }else if (levelArray[i] === "C"){
            levelScore += 41;
        }else if (levelArray[i] === "D"){
            levelScore += 19;
        }
    }
    return levelScore / levelArray.length;
}

function numericValidate(element){
    var elementText = document.getElementById(element).value;
    var labelName = element + "Label";
    var score = 750;
    if (element === "CEAScoreInput"){
        score = 225;
    }
    if (parseInt(elementText) <= score){
        document.getElementById(labelName).innerHTML = "";
    }
    else {
        document.getElementById(element).focus();
        document.getElementById(labelName).innerHTML = "  输入有误，请重试";
        return -1;
    }
}

// function letterValidate(element){
//     var elementText = document.getElementById(element).value;
//     var labelName = element + "Label";
//     var score = 750;
//     if (element === "CEAScoreInput"){
//         score = 225;
//     }
//     if (parseInt(elementText) <= score){
//         document.getElementById(labelName).innerHTML = "";
//     }
//     else {
//         document.getElementById(element).focus();
//         document.getElementById(labelName).innerHTML = "  输入有误，请重试";
//         return -1;
//     }
// }

function clickToCal(){
    var CEAScore = parseInt(document.getElementById("CEAScoreInput").value);
    var CEEScore = parseInt(document.getElementById("CEEScoreInput").value);
    var ALScore = ALFormToScore();
    var finalScore = CEAScore + CEEScore*0.6 + ALScore;
    document.getElementById("scorePlaceholder").innerHTML = finalScore.toFixed(2);
    barChange("ceeP", CEEScore*0.6);
    barChange("ceaP", CEAScore);
    barChange("alP", ALScore);
    document.getElementById("SDC").className = "yesDisplay";
}

function barChange(id, score){
    document.getElementById(id).style.width =  score / 750 * 100 + '%';
}