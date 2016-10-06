$.fn.nav = function () {
    var that = $(this);
    that.attr('otop', that.offset().top);
    $(window).scroll(function () {
        st = document.body.scrollTop;
        if (st >= parseInt(that.attr('otop'))) {
            if (that.css('position') != 'fixed') {
                that.css({'position': 'fixed', top: 0});
            }
        } else if (that.css('position') != 'static') {
            that.css({'position': 'static'});
        }
    });
};