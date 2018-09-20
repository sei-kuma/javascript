(function(){
    'use strict';

    var card = document.getElementById('card');
    var btn = document.getElementById('btn');

    var en = [
    'write',
    'apple',
    'peach'
    ]

    var ja = [
    '書く',
    'りんご',
    '桃'
    ]

    var cardNum = 0;

    card.addEventListener('click', function(){
        card.innerHTML = ja[cardNum];
    });

    btn.addEventListener('click', function(){
        cardNum = Math.floor(Math.random() * en.length)
        card.innerHTML = en[cardNum];
    });

    window.addEventListener('keyup', function(e){
        if(e.keyCode == 70) {
            card.innerHTML = ja[cardNum];
        } else if (e.keyCode == 78) {
            cardNum = Math.floor(Math.random() * en.length)
            card.innerHTML = en[cardNum];
        }
    });
})();