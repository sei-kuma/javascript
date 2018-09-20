(function(){
    'use strict';

    var target = document.getElementById('target');
    var score = document.getElementById('score');
    var miss = document.getElementById('miss');
    var time = document.getElementById('time');

    var string = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        stringCode = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
    var targetString = new String();
    var topStringCode;

    function setTarget() {
        targetString = "";
        for(var i = 0; i < 10; i++){
            targetString += string[Math.floor(Math.random() * string.length)];
        }
        target.innerHTML = targetString;
    };

    function getKeyCode() {
        topStringCode = stringCode[string.indexOf(targetString[0])];
    };

    var ts = new String();
    function reSetTargetString(targetString) {
        ts = "";
        if(lettersCount % 10 != 0){
            for(var i = 0; i < (10 - lettersCount % 10); i++){
                ts += targetString[i + 1];
            };
            targetString = ts;
            return targetString;
        }
        return targetString = "";
    };

    var reTargetString = new String();
    function reSetTarget(targetString) {
        reTargetString = "";
        for(var i = 0; i < lettersCount % 10; i++){
            reTargetString += '_';
        };
        reTargetString = reTargetString + targetString;
        return reTargetString;
    };

    var remainingTimer;

    var gameResult = function () {
        alert('ゲーム終了\n今回のスコアは\nタイピング文字数:'+lettersCount+'\nタイピングミス数:'+missCount);
        target.textContent = "Click Here To Next Game Start!"
        lettersCount = 0;
        score.textContent = 0;
        missCount = 0;
        miss.textContent = 0;
        time.textContent = 30;
        target.className = "";
        stopTimer();
    };

    function startTimer(){
    var remainingTime = 30;
    remainingTimer = setInterval(function(){
            remainingTime--;
            time.textContent = remainingTime;
        }, 1000)
    };

    function stopTimer(){
        clearInterval(remainingTimer);
    }

    var lettersCount = 0,
        missCount = 0;
    window.addEventListener('keyup', function(e){
        getKeyCode();
        if(e.keyCode == topStringCode){
                lettersCount++;
                score.innerHTML = lettersCount;
                targetString = reSetTargetString(targetString);
                target.innerHTML = reSetTarget(targetString);
            if(targetString.length == 0){
                setTarget();
            };
        } else {
            missCount++;
            miss.innerHTML = missCount;
        }
    });

    target.addEventListener('click', function(){
        if(target.className == "active"){
            return;
        }
        setTarget();
        startTimer();
        target.className = "active";
        setTimeout(gameResult, 30000);
    })
})();