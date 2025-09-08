/**
 * Start gallery grid widget script
 */

(function ($) {
    var WidgetGalleryGrid = function () {
        var $grids = $(".mwt-gallery-grid .masonry");
        var filters = $grids.data('filters') ? $grids.data('filters') : false;
        var order = $grids.data('order') ? $grids.data('order') : false;

        if ($grids.length) {
            $grids.imagesLoaded().progress(function () {
                $grids.masonry({
                    columnWidth: '.grid-sizer',
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    horizontalOrder: order,
                    originLeft: true
                });
                if (filters) {
                    $(filters).on('click', 'a', function (e) {
                        var group = $(this).attr('data-filter');
                        var group_class = "." + group;

                        if (group == "*") {
                            $(".grid-item").show();
                            $(this).siblings().removeClass('selected active');
                            $(this).addClass('selected active');
                            $('.masonry').masonry('layout');
                        } else if (group != "") {
                            $(".grid-item").hide();
                            $(group_class).show();
                            $(this).siblings().removeClass('selected active');
                            $(this).addClass('selected active');
                            $('.masonry').masonry('layout');
                        } else {
                            $(".grid-item").show();
                            $(this).siblings().removeClass('selected active');
                            $(this).addClass('selected active');
                            $('.masonry').masonry('layout');
                        }
                    });
                }
            });
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-gallery-grid.default',
            WidgetGalleryGrid
        );
    });
})(jQuery);

/**
 * End gallery grid widget script
 */