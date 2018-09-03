(function(){
    'use strict';

    var timer = document.getElementById('timer')
    var min = document.getElementById('min')
    var sec = document.getElementById('sec')
    var reset = document.getElementById('reset')
    var start = document.getElementById('start')

    var isRunning = false;

    var setTime = 0;
    var startTime = 0;
    var timeLeft = 0;
    var timerId;
    var timeToAdd = 0;

    min.className = 'btn';
    sec.className = 'btn';
    reset.className = 'btn inactive';
    start.className ='btn inactive';

    function updateBUttonState(minButtonState, secButtonState, resetButtonState, startButtonState){
        min.className = minButtonState ? 'btn' : 'btn inactive';
        sec.className = secButtonState ? 'btn' : 'btn inactive';
        reset.className = resetButtonState ? 'btn' : 'btn inactive';
        start.className = startButtonState ? 'btn' : 'btn inactive'
    }

    function updateTimerText(t){
        var d = new Date(t);
        var m = d.getMinutes();
        var s = d.getSeconds();
        var ms = d.getMilliseconds();
        var timerString;

        m = ('0' + m).slice(-2);
        s = ('0' + s).slice(-2); 
        ms = ('00' + ms).slice(-3); 
        timerString = m + ':' + s + '.' +ms
        timer.textContent = timerString;
        document.title = timerString;
    };

    function countdown(){
        timerId = setTimeout(function(){
            timeLeft = setTime - (Date.now() - startTime);
            if(timeLeft < 0){
                updateBUttonState(true, true, false, false);
                isRunning = false;
                start.textContent = 'Start';
                resetTimer();
                return;
            }
            updateTimerText(timeLeft);
            countdown();
        }, 10);
    }

    function startTimer(){
        startTime = Date.now();
        countdown();
    }
    function stopTimer(){
        clearTimeout(timerId);
        setTime = timeLeft;
    }
    function resetTimer(){
        setTime = 0;
        updateTimerText(setTime);
    }

    min.addEventListener('click', function(){
        if (isRunning){
            return
        };
        setTime += 60 * 1000;
        updateBUttonState(true, true, true, true);
        updateTimerText(setTime);
    });

    sec.addEventListener('click', function(){
        if (isRunning){
            return
        };
        setTime += 1000;
        updateBUttonState(true, true, true, true);
        updateTimerText(setTime);
    });

    reset.addEventListener('click', function(){
        if (isRunning){
            return
        };
        updateBUttonState(true, true, false, false);
        resetTimer();
    });

    start.addEventListener('click', function(){
        isRunning = isRunning ? false : true;
        start.textContent = isRunning ? 'Stop' : 'Start';
        if(isRunning){
            updateBUttonState(false, false, false, true);
            startTimer();
        } else {
            updateBUttonState(false, false, true, true);
            stopTimer();
        }
    });
})();