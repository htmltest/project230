$(document).ready(function() {

    $('.landtv-quality-compare').each(function() {
        var isMoving = false;

        $('.landtv-quality-compare-sep').on('mousedown touchstart', function() {
            isMoving = true;
        });
        $('.landtv-quality-compare').on('mousemove', function(e) {
            if (isMoving) {
                var curLeft = e.pageX - $('.landtv-quality-compare').offset().left;
                var curWidth = $('.landtv-quality-compare').width();
                var curSize = curLeft / curWidth * 100;
                if (curSize < 0) {
                    curSize = 0;
                }
                if (curSize > 100) {
                    curSize = 100;
                }
                $('.landtv-quality-compare-sep').css({'left': curSize + '%'});
                $('.landtv-quality-compare-old').css({'width': curSize + '%'});
            }
        });
        $('.landtv-quality-compare').on('touchmove', function(e) {
            if (isMoving) {
                var curLeft = e.originalEvent.touches[0].pageX - $('.landtv-quality-compare').offset().left;
                var curWidth = $('.landtv-quality-compare').width();
                var curSize = curLeft / curWidth * 100;
                if (curSize < 0) {
                    curSize = 0;
                }
                if (curSize > 100) {
                    curSize = 100;
                }
                $('.landtv-quality-compare-sep').css({'left': curSize + '%'});
                $('.landtv-quality-compare-old').css({'width': curSize + '%'});
            }
        });
        $('.landtv-quality-compare').on('mouseup touchend', function() {
            isMoving = false;
        });
    });

    $('.landtv-welcome-links a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            var curHeaderHeight = 0;
            if ($('.site-header').length == 1) {
                curHeaderHeight = $('.site-header').height();
            }
            $('html, body').animate({'scrollTop': curBlock.offset().top - curHeaderHeight});
        }
        e.preventDefault();
    });

});