// 1. Age is days

function ageInDays(){
    let birthYear = prompt("What is your birth year?");
    let totalAgeDays = (2020-birthYear)*365;
    let h3 = document.createElement('h3');
    let textAnswer = document.createTextNode('You are ' + totalAgeDays + ' days old.');
    h3.setAttribute('id', 'ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('totalDays').appendChild(h3);
}

function reset(){
    document.getElementById('totalDays').remove();
}


// 2. Cat gernerator

function generateCat(){
    let image = document.createElement('img');
    let div  = document.getElementById('cat-gen');
    image.src="https://cdn2.thecatapi.com/images/33v.gif";
    div.appendChild(image);
}


// 3. Rock, Paper, Scissors

function rpsGame(yourChoice){
    console.log(yourChoice);

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    
    let message = finalMessage(results);
    console.log(message);

    rpsFrontend(humanChoice, botChoice, message);
}

// Getting random numbers between 0,1,2
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

// randomly picking up the items from the array
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

// Creating different scenes in short database
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        // if someone picks scissors you win
        // 1= winnner, 0= lose, tie= 0.5
        'rock' : {'scissors':1, 'rock':0.5, 'paper':0},
        'paper' : {'rock':1, 'paper':0.5, 'scissors': 0},
        'scissors' : {'paper':1, 'scissors': 0.5, 'rock':0}
    };
    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

// what message should print with different colors
function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost', 'color': 'red'};
    }else if(yourScore === 0.5){
        return {'message': 'You tied', 'color': 'yellow'};
    } else {
        return {'message': 'You win', 'color': 'green'};
    }
}


function rpsFrontend(humanImageChoice, botImageChoice, finalMessage){
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // create div for message, bot and human
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    // addding images with style
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(37,50,233,1)';>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(243,38,24,1)';>"
    
    // appending to html
    document.getElementById('rps-div').appendChild(humanDiv);
    document.getElementById('rps-div').appendChild(messageDiv);
    document.getElementById('rps-div').appendChild(botDiv);
}






















