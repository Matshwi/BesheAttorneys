/**
 * Start mwt counter widget script
 */

(function ($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetMWTCounterUp = function ($scope, $) {
        var $counterContainer = $scope.find(".mwt-counters-container"),
            $counterElement = $counterContainer.find(".mwt-counter-up-number");
        const observerElement = document.querySelectorAll('.mwt-counter-up-number');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target
                    const $counter = $(counter);
                    $counter.numerator($counter.data());
                    observer.unobserve(counter);
                    $('.mwt-counter-up-animation-pattern').addClass('start-pattern-amination');
                }
            })
        }, options)
        observerElement.forEach(i => {
            observer.observe(i)
        })
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-counter-up.default',
            WidgetMWTCounterUp
        );
    });
})(jQuery);

/**
 * End mwt counter widget script
 */