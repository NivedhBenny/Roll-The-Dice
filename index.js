function rollDice(randomNumber,thisImage){
    switch(randomNumber){
        case 1:
            document.querySelector(thisImage).setAttribute("src","./images/dice1.png");
            break;
        case 2:
            document.querySelector(thisImage).setAttribute("src","./images/dice2.png");
            break;
        case 3:
            document.querySelector(thisImage).setAttribute("src","./images/dice3.png");
            break;
        case 4:
            document.querySelector(thisImage).setAttribute("src","./images/dice4.png");
            break;
        case 5:
            document.querySelector(thisImage).setAttribute("src","./images/dice5.png");
            break;
        case 6:
            document.querySelector(thisImage).setAttribute("src","./images/dice6.png");
            break;
    } 
    return;
}

document.querySelector(".btn").addEventListener("click",rollAgain);

function rollAgain(){
    document.querySelector(".btn").innerHTML="Roll Again";
    var randomNumber1 = Math.floor(Math.random() * 6 +1);
    rollDice(randomNumber1,".img1");

    var randomNumber2 = Math.floor(Math.random() * 6 +1);
    rollDice(randomNumber2,".img2");

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }
}