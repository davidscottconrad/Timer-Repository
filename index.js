const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI; //get radius and calculates perimeter of circle
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
        console.log('timer started');
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter)
    },
    onComplete(){
        console.log('complete');
    }
});