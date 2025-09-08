/**
 * Start testimonials carousel widget script
 */

(function ($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */

    var WidgetTestimonialsCarousel = function ($scope, $) {
        var $carouselContainer = $scope.find(".mwt-testimonials-carousel-container");
        var $carousel = $carouselContainer.find(".owl-carousel.mwt-testimonials-carousel");

        var $carouselSync1 = $carouselContainer.find(".owl-carousel.mwt-testimonials-carousel-sync1");
        var $carouselSync2 = $carouselContainer.find(".owl-carousel.mwt-testimonials-carousel-sync2");

        if (!$carousel.length && !$carouselSync1.length && !$carouselSync2.length) {
            return;
        }

        if (!$().owlCarousel) {
            return;
        }

        var loop = $carousel.data('loop') ? $carousel.data('loop') : false;
        var margin = ($carousel.data('margin') || $carousel.data('margin') == 0) ? $carousel.data('margin') : 30;
        var nav = $carousel.data('nav') ? $carousel.data('nav') : false;
        var dots = $carousel.data('dots') ? $carousel.data('dots') : false;
        var themeClass = $carousel.data('themeclass') ? $carousel.data('themeclass') : 'owl-theme';
        var center = $carousel.data('center') ? $carousel.data('center') : false;
        var items = $carousel.data('items') ? $carousel.data('items') : 4;
        var autoplay = $carousel.data('autoplay') ? $carousel.data('autoplay') : false;
        var autoplayTimeout = $carousel.data('autoplaytimeout') ? $carousel.data('autoplaytimeout') : 5000;
        var autoplayHoverPause = $carousel.data('autoplayhoverpause') ? $carousel.data('autoplayhoverpause') : false;
        var responsiveXs = $carousel.data('responsive-xs') ? $carousel.data('responsive-xs') : 1;
        var responsiveSm = $carousel.data('responsive-sm') ? $carousel.data('responsive-sm') : 2;
        var responsiveMd = $carousel.data('responsive-md') ? $carousel.data('responsive-md') : 3;
        var responsiveLg = $carousel.data('responsive-lg') ? $carousel.data('responsive-lg') : 4;
        var draggable = $carousel.data('draggable') ? $carousel.data('draggable') : true;
        var rtl = $carousel.data('rtl') ? $carousel.data('rtl') : false;
        var navSpeed = $carousel.data('nav-speed') ? $carousel.data('nav-speed') : false;

        $carousel.each(function () {
            var number = $(this).data('number');
            $(this).owlCarousel({
                loop: loop,
                margin: margin,
                nav: nav,
                navText: [$('.mwt-testimonials-carousel-prev-' + number), $('.mwt-testimonials-carousel-next-' + number)],
                navContainer: '.mwt-testimonials-carousel-nav-' + number,
                autoplay: autoplay,
                autoplayTimeout: autoplayTimeout,
                dots: dots,
                themeClass: themeClass,
                center: center,
                items: items,
                mouseDrag: draggable,
                touchDrag: draggable,
                rtl: rtl,
                navSpeed: navSpeed,
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

        var marginSync1 = ($carouselSync1.data('margin') || $carouselSync1.data('margin') == 0) ? $carouselSync1.data('margin') : 30;

        $carouselSync1.each(function () {
            $(this).owlCarousel({
                loop: true,
                margin: marginSync1,
                autoplay: false,
                dots: true,
                nav: false,
                center: false,
                responsiveBaseElement: $('body')[0],
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 3
                    },
                    991: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                },
            })

            $carouselSync1.on('click', '.owl-item', function () {
                var carousel = $carouselSync2.data('owl.carousel');
                carousel.to(carousel.relative($(this).index() - 1));
            });

            $carouselSync1.on('change.owl.carousel', function (event) {
                if (event.namespace && event.property.name === 'position') {
                    var target = event.relatedTarget.relative(event.property.value, true);
                    $carouselSync2.owlCarousel('to', target, 300, true);
                }
            });
        })

        $carouselSync2.each(function () {
            $(this).owlCarousel({
                loop: true,
                autoplay: false,
                margin: 0,
                nav: false,
                dots: false,
                center: false,
                mouseDrag: false,
                touchDrag: false,
                responsiveBaseElement: $('body')[0],
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                },
            })
        })
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-testimonials-carousel.default',
            WidgetTestimonialsCarousel
        );
    });
})(jQuery);

/**
 * End testimonials carousel widget script
 */