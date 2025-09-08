/**
 * Start before after widget script
 */

; (function ($) {
    "use strict";
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */

    var WidgetBeforeAfter = function ($scope, $) {

        var $counterElement = $scope.find('.mwt-before-after-container').eq(0);

        $counterElement.twentytwenty();
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-before-after.default',
            WidgetBeforeAfter
        );
    });
})(jQuery);

/**
 * End before after widget script
 */