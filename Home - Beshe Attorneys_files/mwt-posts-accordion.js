/**
 * Start posts tabs widget script
 */

(function ($) {

    var WidgetPostsAccordion = function () {

        //animations
        var dateanimation = ($('.mwt-posts-accordion-image-item-date').data('dateanimation') !== 'undefined') ? $('.mwt-posts-accordion-image-item-date').data('dateanimation') : 'none';
        var contentanimation = ($('.mwt-posts-accordion-image-item-content').data('contentanimation') !== 'undefined') ? $('.mwt-posts-accordion-image-item-content').data('contentanimation') : 'none';
        var animationdelay = ($('.mwt-posts-accordion-image-item-date').data('animationdelay') !== 'undefined') ? $('.mwt-posts-accordion-image-item-date').data('animationdelay') : 300;

        setTimeout(function () {
            $('.active .mwt-posts-accordion-image-item-date').show().addClass('animated ' + dateanimation);
            $('.active .mwt-posts-accordion-image-item-content').show().addClass('animated ' + contentanimation);
        }, animationdelay);

        $('.mwt-posts-accordion-nav').on('click', '.mwt-posts-accordion-nav-item:not(.active)', function () {
            $(this).closest('.mwt-posts-accordion-container').find('.mwt-posts-accordion-image-item-date').removeClass('animated ' + dateanimation).css({ 'visibility': 'hidden' });
            $(this).closest('.mwt-posts-accordion-container').find('.mwt-posts-accordion-image-item-content').removeClass('animated ' + contentanimation).css({ 'visibility': 'hidden' });

            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.mwt-posts-accordion-container').find('.mwt-posts-accordion-image-item').removeClass('active').eq($(this).index()).addClass('active');

            setTimeout(function () {
                $('.active .mwt-posts-accordion-image-item-date').show().addClass('animated ' + dateanimation);
                $('.active .mwt-posts-accordion-image-item-content').show().addClass('animated ' + contentanimation);
            }, animationdelay);
        });


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-posts-accordion.default',
            WidgetPostsAccordion
        );
    });
})(jQuery);

/**
 * End posts tabs widget script
 */