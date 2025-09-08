/**
 * Start parallax box widget script
 */

; (function ($) {
    "use strict";
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */

    var WidgetParallaxBox = function ($scope, $) {

        var $parallaxBox = $scope.find('.mwt-parallax-box-container');
        var scene = $parallaxBox.find('.scene').get(0);

        if (typeof (scene) != 'undefined' && scene != null) {
            var parallaxInstance = new Parallax(scene, {
            });
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-parallax-box.default',
            WidgetParallaxBox
        );
    });
})(jQuery);

/**
 * End parallax box widget script
 */