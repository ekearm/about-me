'use strict'
var points = 0;
var living = true;

alert('I wanna play a game.');

var questionZero = prompt('This is a game for your life. Do you wanna play?');
questionZero = questionZero.toUpperCase();
//console.log(questionZero);
if(questionZero !== 'Y' && questionZero !== 'YES') {
    document.location.reload();
    //console.log(questionZero);
}
else{
    alert('Excelent I knew you would see it my way!');
    
    var questionOne = prompt('Has Ed finished the Harry Potter series?');
    questionOne = questionOne.toUpperCase();
    console.log(questionOne);
    if (questionOne === 'YES' || questionOne === 'Y') {
        points--;
        console.log(points);
    }
    else {
        points++;
        console.log(points);
    }

    var questionTwo = prompt('Has Ed ever done a triathalon?');
    questionTwo = questionTwo.toUpperCase();
    console.log(questionTwo);
    if (questionTwo === 'YES' || questionTwo === 'Y') {
        points--;
        console.log(points);
        }
    else {
        points++;
        console.log(points);
    }

    var questionThree = prompt('Ed has swam non-stop for one hour?');
    questionThree = questionThree.toLocaleUpperCase();
    console.log(questionThree);
    if (questionThree === 'NO' || questionThree === 'N') {
        points--;
        console.log(points);
    }
    else{
        points++;
    }

    var questionFour = prompt('Ed has a favorite microbe?');
    questionFour = questionFour.toUpperCase();
    console.log(questionFour);
    if(questionFour === 'NO' || questionFour === 'N'){
        points--;
        console.log(points);
    }
    else{
        points++;
        console.log(points);
    }

    var questionFive = prompt('Ed has seen the Blair Witch Project');
    questionFive= questionFive.toUpperCase();
    console.log(questionFive);
    if(questionFive ==='YES' || questionFive === 'Y'){
        points--;
        console.log(points);
    }
    else{
        points++;
        console.log(points);
    }
}

if(points < 0){
    alert('You will now suffer my wraths!')
    while (living){
        alert('You find yourself in a room being interagated by 5 of mobsters \n They are asking you if you or Jimmy has the the money.')
        var mobResponse = prompt('Do you A.Blame Jimmy B.Say nothing C.Something Else?')
        mobResponse = mobResponse.toLocaleUpperCase();

        if(mobResponse === 'C'){
            alert('The mobsters kill you');
            living = false;
        }
        else if (mobResponse === 'A'){
            var money = 10000
            var myGuess = 3;
            var missingMoney = Math.floor(Math.random() * Math.floor(money));
            missingMoney = parseInt(missingMoney);
            console.log(missingMoney);
            alert('The mob goes into the other room and kills Jimmy');
            
            while (myGuess != 0){

                var moneyResponse = prompt('The mob then asks you how much money is missing 0-10000');
                parseInt(moneyResponse);
                
                if (missingMoney === moneyResponse){
                    alert("The mob thanks you.");
                    myGuess = 0;
                }

                else{
                    myGuess--;
                }               
            }

            if(myGuess === 0){
                alert("The mob kills you");
                living = false;
            }
        }
        
        else{
            alert('The mob lets you go and you walk out the door. When all of a sudden you ar transported \n to a vacent room with nothing but white space. ')
            alert('You are now confronted by the mighty Cthulhu \n he gives you three choices')
            var deathChoice = prompt('Do you A.Choose to die B.Slowly lose your mind C.Walk away')
            deathChoice = deathChoice.toUpperCase();
            if(deathChoice === 'B'){
                alert('You are no longer sane, and you gauge out your eyes, swallow your tongue bash your head into a wall \n Cthulu eats your body.')
                living = false;
            } 
            else if (deathChoice === 'C'){
                alert('You walk until you collapse from exhaustion Cthulu eats your tired body');
                living = false;
            }
            else {
                alert('Cthulu picks you up and eats you.');
                living = false;
            }
        }
    }

    if (living === false){
        document.location.reload();
    }
}
else{
    alert('Your points are: ' + points );

}
/*function store() {
    var questionOne = document.getElementById('qOne').value.toUpperCase();
    var questionTwo = document.getElementById('qTwo').value.toUpperCase();
    var questionThree = document.getElementById('qThree').value.toUpperCase();
    var questionFour = document.getElementById('qFour').value.toUpperCase();
    var questionFive = document.getElementById('qFive').value.toUpperCase();

    console.log(questionOne, questionTwo, questionThree, questionFour, questionFive);
    
    
    if ( questionOne !== 'YES' && questionOne !== 'NO' || questionTwo !== 'YES' && questionTwo !== 'NO' || questionThree !== 'YES' && questionThree !== 'NO' || questionFour !== 'YES' && questionFour !== 'NO' || questionFive !== 'YES' && questionFive !== 'NO') {
        alert('Please Enter yes or no!');
        document.location.reload();
    }
    else {
        //Question One
        if (questionOne === 'NO') {
            point++;
            //document.getElementById('aOne').innerHTML = 'Ed has finished the first four but never finished the series!';
        }
        else{
            document.getElementById('aOne').innerHTML = 'Ed has finished the first four but never finished the series!';
        }
        //Question Two
        if (questionTwo === 'NO'){
            point++;
        }
        else {
            document.getElementById('aTwo').innerHTML = 'Ed has never done a triathalon.';
        }
        //Question Three
        if (questionThree === 'YES') {
            point++;
        }
        else {
            document.getElementById('aThree').innerHTML = 'Ed took a couple of swimm courses where one of the finals were swimm for one hour, bonus if you did one stroke. <br> Ed completed both!';
        }

        //Question Four
        if (questionFour === 'YES') {
            point++;
        }
        else {
            document.getElementById('aFour').innerHTML = 'Ed was a microbiology major for a long time and really liked the bacterium <em>Treponema pallidum</em>';
        }

        //Question Five
        if (questionFive === 'NO') {
            point++;
        }
        else{
            document.getElementById('aFive').innerHTML = 'Ed has never seen The Blair Witch movie'
        }

        console.log(questionOne, questionTwo, questionThree, questionFour, questionFive);
        console.log(point);
        point = point.toString();
        document.getElementById('totalQuizPoints').innerHTML = "Total points are: " + point;
    }
}*/
