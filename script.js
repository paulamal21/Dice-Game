const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelectorAll('img')[0];
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function() {
     scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.remove('player-winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init()
//starting conditons

score0El.textContent = 0;
score1El.textContent = 0;

//Function to Switch Player
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

// Function for roll button

btnRoll.addEventListener('click', function() {
    if (playing) {
//Get random number and display dice
    let dice = Math.trunc(Math.random() * 6) + 1;
    let diceImg = "img/dice" + dice + ".png";
    diceEl.setAttribute("src", diceImg);   

    if (dice !== 1) {
        //add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
 }
    else {
       switchPlayer();
    }
  }
})

btnHold.addEventListener('click', function() {
    if (playing) {
    //add current score to active player's score
    //check if player wins
    //if not switch player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    scores[activePlayer];

    if (scores[activePlayer] >= 100) { 
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }

    else {
    switchPlayer();
    }
}
})

btnNew.addEventListener('click', init);

function myFunction() {
        document.getElementById("rule").innerHTML = "Roll it, roll it as many times as you like, current score will add up, but if you get number 1 current score is going down. You can Hold the score and pass the turn to the other player. And the winner is whoever scores 100 or more!! Happy Roling!!";
      }
