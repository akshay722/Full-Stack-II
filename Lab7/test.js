window.addEventListener('load', (event) => {
    console.log('window loading ...');
});

var cont = document.querySelectorAll('.container');
const startButton = document.getElementById('btnStart');
const stopButton = document.getElementById('btnStop');
const resetButton = document.querySelector('#btnReset');
const input1 = document.getElementById("txtStartTime");
const input2 = document.getElementById("txtEndTime");
const timer = document.getElementById("timer");

var start_time;
var stop_time;

startButton.addEventListener('click', function(){
    start_time = new Date();
    var time = start_time.getHours() + ":" + start_time.getMinutes() + ":" + start_time.getSeconds();
    console.log("start timer: "+time);
    input1.value = time;
});

stopButton.addEventListener('click', function(){
    stop_time = new Date();
    var time2 = stop_time.getHours() + ":" + stop_time.getMinutes() + ":" + stop_time.getSeconds();
    console.log("stop timer: "+time2);

    input2.value = time2;

    var res = Math.abs(stop_time - start_time) / 1000;
    var minutes = Math.floor(res / 60) % 60;
    var seconds = res % 60;
    console.log("Duration => "+ "minutes: "+ minutes + ", seconds: "+ seconds);

    var node = document.createElement('input');
    node.value = ("Duration => "+ "minutes: "+ minutes + ", seconds: "+ seconds);
    timer.appendChild(node);
    node.className='node';
});

resetButton.addEventListener('click', function(){
    input1.value=null;
    input2.value=null;
    start_time= Date('00:00:00');
    stop_time= Date('00:00:00');
    while (timer.firstChild) {
        timer.removeChild(timer.firstChild);
    }
    console.log("reset button clicked");
});
