let userScore = 0;
let computerScore = 0;
let Round = 0;
function func(userChoice){
    document.getElementById("userChoice").innerHTML = userChoice;
    const myArray = ['Rock', 'Paper', 'Scissors'];
    const Computer_choice = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("computerChoice").innerHTML = Computer_choice;
    if ((userChoice === 'Rock' && Computer_choice === 'Paper') || (userChoice === 'Paper' && Computer_choice === 'Scissors') || ((userChoice === 'Scissors' && Computer_choice === 'Rock'))){
        computerScore +=1;
        var Result = 'Computer Wins';
        Round +=1;
    }
    else if ((userChoice === 'Rock' && Computer_choice === 'Scissors') || (userChoice === 'Paper' && Computer_choice === 'Rock') || ((userChoice === 'Scissors' && Computer_choice === 'Paper'))){
        userScore +=1;
        var Result = 'User Wins';
        Round +=1;
    }
    else{
        var Result = 'Its a tie!';
        Round +=1;
    }
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("round").innerHTML = Round;
    document.getElementById("result").innerHTML = Result;
    if (Round === 10 && (userScore > computerScore)){
        setTimeout(function() {
            alert('User wins the match!');
            location.reload("index.html");
          }, 0)
    }
    else if (Round === 10 && (userScore < computerScore)){
        setTimeout(function() {
            alert('Computer wins the match!');
            location.reload("index.html");
          }, 0)
        // alert('Computer wins the match!');
        // location.reload("index.html");
    }
    else if(Round === 10 && (userScore === computerScore)){
        setTimeout(function() {
            alert('The match is tied!');
            location.reload("index.html");
          }, 0)
        // alert('The match is tied!');
        // location.reload("index.html");
    }
}

const newvar = document.querySelectorAll("button");
newvar.forEach((el) => 
    el.addEventListener("click",function(){
        console.log('click');
    }));


