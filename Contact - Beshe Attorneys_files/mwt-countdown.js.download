/**
 * Start mwt counter widget script
 */

(function ($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetMWTCountdown = function ($scope, $) {
        var $counterContainer = $scope.find(".mwt-countdown-container"),
            $counterElement = $counterContainer.find(".comingsoon-countdown");
        $counterElement.each(function () {
            var $this = $(this);
            //today date plus month for demo purpose
            var date = ($this.data('date') !== 'undefined') ? $this.data('date') : false;
            if (date) {
                date = new Date(date);
            } else {
                date = new Date();
                date.setMonth(date.getMonth() + 1);
            }
            $this.countdown({ until: date });
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-countdown.default',
            WidgetMWTCountdown
        );
    });
})(jQuery);

/**
 * End mwt counter widget script
 */