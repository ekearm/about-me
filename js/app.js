'use strict'
var point = 0;
function store() {
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
}
