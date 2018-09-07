;(function($) {
    
    $.fn.showsize = function (options) {
        var elements = this;
        elements.each(function(){
            var opts = $.extend({}, $.fn.showsize.defaults, options, $(this).data());
            $(this).click(function(){
                var msg = $(this).width() + ' x ' + $(this).height();
                $(this).wrap('<div style="position:relative;"><div>');
                var div = $('<div>')
                            .text(msg)
                            .css('position', 'absolute')
                            .css('top', '0')
                            .css('background', 'black')
                            .css('color', getRandomColor())
                            .css('font-size', opts.size + 'px')
                            .css('opacity', opts.opacity)
                            .css('padding', '2px');
                $(this).after(div);
            });
        });
        return this
    };

    function getRandomColor() {
        var colors = ['white', 'pink', 'orange', 'green'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    $.fn.showsize.dafaults = {
        size: 10,
        opacity: 0.9
    };


})(jQuery);