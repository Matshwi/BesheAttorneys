/**
 * Start gallery carousel widget script
 */

(function ($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */

    var WidgetOwlCarousel = function ($scope, $) {
        var $carouselContainer = $scope.find(".mwt-gallery-carousel-container");
        var $carousel = $carouselContainer.find(".owl-carousel.mwt-gallery-carousel");

        if (!$carousel.length) {
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
        var rtl = $carousel.data('rtl') ? $carousel.data('rtl') : false;
        var filters = $carousel.data('filters') ? $carousel.data('filters') : false;

        if (filters) {
            $carousel.after($carousel.clone().addClass('owl-carousel-filter-cloned'));
            $(filters).on('click', 'a', function (e) {
                //processing filter link
                e.preventDefault();
                if ($(this).hasClass('selected')) {
                    return;
                }
                var filterValue = $(this).attr('data-filter');
                $(this).siblings().removeClass('selected active');
                $(this).addClass('selected active');

                //removing old items
                $carousel.find('.owl-item').length;
                for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
                    $carousel.trigger('remove.owl.carousel', [1]);
                };

                //adding new items
                var $filteredItems = $($carousel.next().find(' > ' + filterValue).clone());
                $filteredItems.each(function () {
                    $carousel.trigger('add.owl.carousel', $(this));
                    $(this).addClass('scaleAppear');
                });

                $carousel.trigger('refresh.owl.carousel');
            });
        } //filters

        $carousel.each(function () {
            var number = $(this).data('number');
            $(this).owlCarousel({
                loop: loop,
                margin: margin,
                nav: nav,
                navText: [$('.mwt-gallery-carousel-prev-' + number), $('.mwt-gallery-carousel-next-' + number)],
                navContainer: '.mwt-gallery-carousel-nav-' + number,
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
            'frontend/element_ready/mwt-gallery-carousel.default',
            WidgetOwlCarousel
        );
    });
})(jQuery);

/**
 * End gallery carousel widget script
 */