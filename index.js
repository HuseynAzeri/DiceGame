


function shuffleLeft(number){
if(number===1){
    document.querySelector(".leftDice .c1").style.visibility = "hidden";
    document.querySelector(".leftDice .c2").style.visibility = "hidden";
    document.querySelector(".leftDice .c3").style.visibility = "hidden";
    document.querySelector(".leftDice .c4").style.visibility = "hidden";
    document.querySelector(".leftDice .c5").style.visibility = "hidden";
    document.querySelector(".leftDice .c6").style.visibility = "hidden";
    document.querySelector(".leftDice .c7").style.visibility = "visible";
}
else if(number===2){
    document.querySelector(".leftDice .c1").style.visibility = "visible";
    document.querySelector(".leftDice .c6").style.visibility = "visible";
    document.querySelector(".leftDice .c7").style.visibility = "hidden";
    document.querySelector(".leftDice .c2").style.visibility = "hidden";
    document.querySelector(".leftDice .c3").style.visibility = "hidden";
    document.querySelector(".leftDice .c4").style.visibility = "hidden";
    document.querySelector(".leftDice .c5").style.visibility = "hidden";
    
}
else if(number===3){
    document.querySelector(".leftDice .c1").style.visibility = "visible";
    document.querySelector(".leftDice .c6").style.visibility = "visible";
    document.querySelector(".leftDice .c7").style.visibility = "visible";
    document.querySelector(".leftDice .c2").style.visibility = "hidden";
    document.querySelector(".leftDice .c3").style.visibility = "hidden";
    document.querySelector(".leftDice .c4").style.visibility = "hidden";
    document.querySelector(".leftDice .c5").style.visibility = "hidden";
    
}
else if(number===4){
    document.querySelector(".leftDice .c1").style.visibility = "visible";
    document.querySelector(".leftDice .c3").style.visibility = "visible";
    document.querySelector(".leftDice .c4").style.visibility = "visible";
    document.querySelector(".leftDice .c6").style.visibility = "visible";
    document.querySelector(".leftDice .c2").style.visibility = "hidden";
    document.querySelector(".leftDice .c7").style.visibility = "hidden";
    document.querySelector(".leftDice .c5").style.visibility = "hidden";
}
else if(number===5){
    document.querySelector(".leftDice .c1").style.visibility = "visible";
    document.querySelector(".leftDice .c3").style.visibility = "visible";
    document.querySelector(".leftDice .c4").style.visibility = "visible";
    document.querySelector(".leftDice .c6").style.visibility = "visible";
    document.querySelector(".leftDice .c7").style.visibility = "visible";
    document.querySelector(".leftDice .c2").style.visibility = "hidden";
    document.querySelector(".leftDice .c5").style.visibility = "hidden";
}
else if(number===6){
    document.querySelector(".leftDice .c1").style.visibility = "visible";
    document.querySelector(".leftDice .c2").style.visibility = "visible";
    document.querySelector(".leftDice .c3").style.visibility = "visible";
    document.querySelector(".leftDice .c4").style.visibility = "visible";
    document.querySelector(".leftDice .c5").style.visibility = "visible";
    document.querySelector(".leftDice .c6").style.visibility = "visible";
    document.querySelector(".leftDice .c7").style.visibility = "hidden";
}
}
function shuffleRight(number){
    if(number===1){
        document.querySelector(".rightDice .c1").style.visibility = "hidden";
        document.querySelector(".rightDice .c2").style.visibility = "hidden";
        document.querySelector(".rightDice .c3").style.visibility = "hidden";
        document.querySelector(".rightDice .c4").style.visibility = "hidden";
        document.querySelector(".rightDice .c5").style.visibility = "hidden";
        document.querySelector(".rightDice .c6").style.visibility = "hidden";
        document.querySelector(".rightDice .c7").style.visibility = "visible";
    }
    else if(number===2){
        document.querySelector(".rightDice .c1").style.visibility = "visible";
        document.querySelector(".rightDice .c6").style.visibility = "visible";
        document.querySelector(".rightDice .c7").style.visibility = "hidden";
        document.querySelector(".rightDice .c2").style.visibility = "hidden";
        document.querySelector(".rightDice .c3").style.visibility = "hidden";
        document.querySelector(".rightDice .c4").style.visibility = "hidden";
        document.querySelector(".rightDice .c5").style.visibility = "hidden";
        
    }
    else if(number===3){
        document.querySelector(".rightDice .c1").style.visibility = "visible";
        document.querySelector(".rightDice .c6").style.visibility = "visible";
        document.querySelector(".rightDice .c7").style.visibility = "visible";
        document.querySelector(".rightDice .c2").style.visibility = "hidden";
        document.querySelector(".rightDice .c3").style.visibility = "hidden";
        document.querySelector(".rightDice .c4").style.visibility = "hidden";
        document.querySelector(".rightDice .c5").style.visibility = "hidden";
        
    }
    else if(number===4){
        document.querySelector(".rightDice .c1").style.visibility = "visible";
        document.querySelector(".rightDice .c3").style.visibility = "visible";
        document.querySelector(".rightDice .c4").style.visibility = "visible";
        document.querySelector(".rightDice .c6").style.visibility = "visible";
        document.querySelector(".rightDice .c2").style.visibility = "hidden";
        document.querySelector(".rightDice .c7").style.visibility = "hidden";
        document.querySelector(".rightDice .c5").style.visibility = "hidden";
    }
    else if(number===5){
        document.querySelector(".rightDice .c1").style.visibility = "visible";
        document.querySelector(".rightDice .c3").style.visibility = "visible";
        document.querySelector(".rightDice .c4").style.visibility = "visible";
        document.querySelector(".rightDice .c6").style.visibility = "visible";
        document.querySelector(".rightDice .c7").style.visibility = "visible";
        document.querySelector(".rightDice .c2").style.visibility = "hidden";
        document.querySelector(".rightDice .c5").style.visibility = "hidden";
    }
    else if(number===6){
        document.querySelector(".rightDice .c1").style.visibility = "visible";
        document.querySelector(".rightDice .c2").style.visibility = "visible";
        document.querySelector(".rightDice .c3").style.visibility = "visible";
        document.querySelector(".rightDice .c4").style.visibility = "visible";
        document.querySelector(".rightDice .c5").style.visibility = "visible";
        document.querySelector(".rightDice .c6").style.visibility = "visible";
        document.querySelector(".rightDice .c7").style.visibility = "hidden";
    }
}
function roll(){
    var firstDice=Math.random()*5
    firstDice=Math.round(firstDice)+1;
    
    var secondDice=Math.random()*5
    secondDice=Math.round(secondDice)+1;
    shuffleLeft(firstDice);
    shuffleRight(secondDice);
    console.log(firstDice);
    console.log(secondDice);
    if(firstDice>secondDice){
        document.querySelector("h1").innerHTML="Player 1 wins"
    }
    else if(firstDice<secondDice){
        document.querySelector("h1").innerHTML="Player 2 wins"
    }
    else{
        document.querySelector("h1").innerHTML="DRAW !!!"
    }
}

var shuffleBtn=document.querySelector("a");
shuffleBtn.onclick= "shuffleLeft(firstDice)"