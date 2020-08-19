class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        if (callbacks){ //optional parameter
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }

    start = () => {
        if (this.onStart){
            this.onStart(this.timeRemaining);
        }//checks if onStart is defined
        this.tick();
        this.timerInterval = setInterval(this.tick, 20);
    }

    pause = () => {
        clearInterval(this.timerInterval);
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.timeRemaining = this.timeRemaining-.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
};