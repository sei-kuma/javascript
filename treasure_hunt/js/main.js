(function() {
    'use strict';

    var boxes = document.getElementsByClassName('box');
    var restart = document.getElementById('restart');

    var treasure = [
    'cobra.png',
    'coin.png',
    'empty.png'
    ];

    function init() {
        var i;
        for (i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', function() {
                if (restart.className === 'active') {
                    return;
                }
                var j;
                for (j = 0;j < boxes.length;j++) {
                    boxes[j].src = ('img/' + treasure[Math.floor(Math.random() * boxes.length)]);
                    boxes[j].className = 'box disabled';
                }
                this.className = 'box';
                restart.className = 'active';
            })
        }
    };

    init();

    restart.addEventListener('click', function () {
        var i;
         for (i = 0; i < boxes.length; i++) {
            boxes[i].src = 'img/box.png';
            boxes[i].className = 'box shake';
         }
        restart.className = 'inactive';
    });
})();