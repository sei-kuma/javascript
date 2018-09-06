(function(){
    'use strict';

    var open = document.getElementById('open');
    var hideArea = document.getElementById('mask');
    var close = document.getElementById('close');

    open.addEventListener('click', function(){
        document.body.className = 'menu-open';
    });
    close.addEventListener('click', function(){
        document.body.className = '';
    });
    hideArea.addEventListener('click', function(){
        document.body.className = '';
    });
})();