/**
 * Start gallery carousel widget script
 */

(function ($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */

    var WidgetProductsCarousel = function ($scope, $) {
        $('.products').addClass('owl-carousel');
        var $carouselContainer = $scope.find(".mwt-products-carousel-container .mwt-products-carousel");
        var $carousel = $carouselContainer.find(".owl-carousel");

        if (!$carousel.length) {
            return;
        }

        if (!$().owlCarousel) {
            return;
        }

        var loop = $carouselContainer.data('loop') ? $carouselContainer.data('loop') : false;
        var margin = ($carouselContainer.data('margin') || $carouselContainer.data('margin') == 0) ? $carouselContainer.data('margin') : 30;
        var nav = $carouselContainer.data('nav') ? $carouselContainer.data('nav') : false;
        var dots = $carouselContainer.data('dots') ? $carouselContainer.data('dots') : false;
        var themeClass = $carouselContainer.data('themeclass') ? $carouselContainer.data('themeclass') : 'owl-theme';
        var center = $carouselContainer.data('center') ? $carouselContainer.data('center') : false;
        var items = $carouselContainer.data('items') ? $carouselContainer.data('items') : 4;
        var autoplay = $carouselContainer.data('autoplay') ? $carouselContainer.data('autoplay') : false;
        var autoplayTimeout = $carouselContainer.data('autoplaytimeout') ? $carouselContainer.data('autoplaytimeout') : 3000;
        var autoplayHoverPause = $carouselContainer.data('autoplayhoverpause') ? $carouselContainer.data('autoplayhoverpause') : false;
        var responsiveXs = $carouselContainer.data('responsive-xs') ? $carouselContainer.data('responsive-xs') : 1;
        var responsiveSm = $carouselContainer.data('responsive-sm') ? $carouselContainer.data('responsive-sm') : 2;
        var responsiveMd = $carouselContainer.data('responsive-md') ? $carouselContainer.data('responsive-md') : 3;
        var responsiveLg = $carouselContainer.data('responsive-lg') ? $carouselContainer.data('responsive-lg') : 4;
        var rtl = $carouselContainer.data('rtl') ? $carouselContainer.data('rtl') : false;
        var number = $carouselContainer.data('number');

        $carousel.each(function () {
            $(this).owlCarousel({
                loop: loop,
                margin: margin,
                nav: nav,
                navText: [$('.mwt-products-carousel-prev-' + number), $('.mwt-products-carousel-next-' + number)],
                navContainer: '#mwt-products-carousel-nav-' + number,
                autoplay: autoplay,
                autoplayTimeout: autoplayTimeout,
                dots: dots,
                themeClass: themeClass,
                center: center,
                items: items,
                rtl: rtl,
                autoplayHoverPause: autoplayHoverPause,
                responsiveBaseElement: $('body')[0],
                responsive: {
                    0: {
                        items: responsiveXs
                    },
                    767: {
                        items: responsiveSm
                    },
                    991: {
                        items: responsiveMd
                    },
                    1200: {
                        items: responsiveLg
                    },
                },
            })
            $carousel.find('.owl-stage-outer').wrap('<div class="owl-stage-outer-wrap"></div>');
        })
            .addClass(themeClass);
        if (center) {
            $carousel.addClass('owl-center');
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-products-carousel.default',
            WidgetProductsCarousel
        );
    });
})(jQuery);

/**
 * End gallery carousel widget script
 */