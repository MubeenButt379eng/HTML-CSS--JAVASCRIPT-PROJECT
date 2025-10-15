 let  randomNum = parseInt(Math.random()*100 -1);
 const submit= document.querySelector('#subt');
 const userInput = document.querySelector('#guessField');
 const guessSlot = document.querySelector('.guesses');
 const lastResult = document.querySelector('.lastResult');
 const LowHi = document.querySelector('.lowOrHi');
 const StartOver = document.querySelector('.resultParas');

 const p = document.createElement('p');

 let preGuess = [];
 let numGuess = 1;
 let playGame = true;

 if(playGame){
submit.addEventListener('click',function(e){
e.preventDefault();
const guess =parseInt(userInput.value)
console.log(guess);
validateGuess(guess)
})
 }


function validateGuess(guess){
if(isNaN(guess)){
alert('Please Enter a Valid Number')
}else if (guess < 1){
    alert('Please Enter a Number More than 1');
}else if (guess>100){
    alert('Please Enter a  Number');
}else {
    preGuess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over.Random number Was${randomNum}`)
        endGame();
    }else {
        displayGuess(guess)
        checkGuess(guess)
    }
}
}


function checkGuess(guess){
if(guess === randomNum){
displayMessage(`You Guesses a Right Number`)
endGame();
}else if(guess < randomNum){
displayMessage(`Number is Too Low`)
}else if(guess > randomNum){
displayMessage(`Number is Too High`)

}
}
function displayGuess(guess){
userInput.value = '';
guessSlot.innerHTML += `${guess},      `;
numGuess++;
lastResult.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
LowHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
userInput.value= '';
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTMLc= `<h2 id ="newGame">Start New Game</h2>`;
StartOver.appendChild(p);
playGame = false;
newGame();
}

function newGame(){
const newBtn = document.querySelector('#newGame')
newBtn.addEventListener('click',function(e){
randomNum = parseInt(Math.random()*100 -1);
preGuess = [];
numGuess = 1;
guessSlot.innerHTML = '';
lastResult.innerHTML = `${11-numGuess}`;
userInput.removeAttribute('disabled');
StartOver.removeChild(p);
playGame = true;
})
}
 