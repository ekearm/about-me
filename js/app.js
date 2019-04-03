'use strict';
var points = 0;

alert('I wanna play a game.');

function questionZero(){
  var answerZero = prompt('This is a game for your life. Do you wanna play?').toUpperCase();
  if (answerZero !== 'Y' && answerZero !== 'YES') {
    questionZero();
  } else {
    questionOne();
  }
}

function questionOne(){
  var answerOne = prompt('Has Ed finished the Harry Potter series?').toUpperCase();
  if (answerOne === 'N' || answerOne === 'NO') {
    points++;
  } else {
    points--;
  }
  questionTwo();
}

function questionTwo() {
  var answerTwo = prompt('Has Ed ever done a triathalon?').toUpperCase();
  if (answerTwo === 'NO' || answerTwo === 'N') {
    points++;
  } else {
    points--;
  }
  questionThree();  
}

function questionThree() {
  var answerThree = prompt('Ed has swam non-stop for one hour?').toUpperCase();
  if (answerThree === 'YES' || answerThree === 'Y') {
    points++;
  } else{
    points--;
  }
  questionFour();
}

function questionFour() {
  var answerFour = prompt('Ed has a favorite microbe?').toUpperCase();
  if(answerFour ==='YES' || answerFour === 'Y'){
    points++;
  } else{
    points--;
  }
  questionFive();
}

function questionFive() {
  var answerFive = prompt('Ed has seen the Blair Witch Project').toUpperCase();
  if(answerFive ==='NO' || answerFive === 'N'){
    points++;
  } else{
    points--;
  }
  questionSix();
}
function questionSix() {
  var tally = 0;
  var answerSix = parseInt(prompt('How many animals does Ed have'));
  while (tally < 3 && answerSix !== 11) {
    if (answerSix < 11){
      tally++;
      answerSix = parseInt(prompt('Sorry that number is to low. Try again.'));
    }
    else if (answerSix > 11){
      answerSix = parseInt(prompt('Sorry that number is to high. Try again.'));
      tally++;
      answerSix;
    }
  }
  if(answerSix === 11){
    points++;
    alert('Yay!');
  }

  if (tally === 3){
    points -= 3;
  }
  questionSeven();
}

function questionSeven(){
  var firstAlert = alert('Last Question');
  firstAlert;
  var colors = ['yellow','orange' , 'brown'];
  var guess = prompt('Guess one of my favorite colors You get 5 guesses');
  var guessCount = 0;
  while (guessCount !== 5 && guess !== colors[0] && guess !== colors[1] && guess !== colors [2]){
    guessCount++;
    guess = prompt('Thats wrong try again!');
  }
  if (guessCount === 5){
    points -= 5;
  }
}

questionZero();

console.log(points);

if (points < 0) {
  console.log('Boo');
  alert('You will now suffer my wraths!');


  alert('You find yourself in a room being interagated by 5 of mobsters \n They are asking you if you or Jimmy has the the money.');
  var mobResponse = prompt('Do you A.Blame Jimmy B.Say nothing C.Something Else?').toUpperCase();
  if (mobResponse === 'A'){
    killJimmy();
  } else if (mobResponse === 'B'){
    freedom();
  } else {
    alert('The mobsters kill you');
  }
} else {
  alert('Congrats you won');
}


function killJimmy() {
  var money = 10000;
  var myGuess = 3;
  var missingMoney = Math.floor(Math.random() * Math.floor(money));
  missingMoney = missingMoney.toString();

  console.log(missingMoney);
  alert('The mob goes into the other room and kills Jimmy');       
  while (myGuess !== 0){
    var moneyResponse = prompt('The mob then asks you how much money is missing 0-10000');
    if (missingMoney === moneyResponse){
      alert('The mob thanks you.');
      myGuess = 0;
    } else{
      myGuess--;
    }               
  }
  if(myGuess === 0){
    alert('The mob kills you');
  }
}     

function freedom(){
  alert('The mob lets you go and you walk out the door. When all of a sudden you ar transported \n to a vacent room with nothing but white space. ');
  alert('You are now confronted by the mighty Cthulhu \n he gives you three choices');

  var deathChoice = prompt('Do you A.Choose to die B.Slowly lose your mind C.Walk away').toUpperCase();

  if(deathChoice === 'B'){
    alert('You are no longer sane, and you gauge out your eyes, swallow your tongue bash your head into a wall \n Cthulu eats your body.')
  } 
  else if (deathChoice === 'C'){
    alert('You walk until you collapse from exhaustion Cthulu eats your tired body');
  }
  else {
    alert('Cthulu picks you up and eats you.');
  }
}
