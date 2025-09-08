/**
 * Start mwt tabs accordion widget script
 */

(function ($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetMWTTabsAccordion = function ($scope, $) {
        var $tabsAccordionContainer = $scope.find(".mwt-tabs-accordion_container"),
            $tabElement = $tabsAccordionContainer.find(".mwt-tabs-accordion_tab");

        // Show the first tab and hide the rest
        $('.mwt-tabs-accordion_tab:first-child').addClass('active');
        $('.mwt-tabs-accordion_tab-item').hide();
        $('.mwt-tabs-accordion_tab-item:first').show().addClass('active');

        // Click function
        $tabElement.click(function () {
            $(".mwt-tabs-accordion_container .mwt-tabs-accordion_tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".mwt-tabs-accordion_tab-item").hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active')
        }).eq(0).addClass("active");

        // Show the first accordion item content and hide the rest
        $('.mwt-tabs-accordion_accordion-wrap div:first-child .mwt-tabs-accordion_accordion-title').addClass('show');
        $('.mwt-tabs-accordion_accordion-content').hide();
        $('.mwt-tabs-accordion_accordion-wrap div:first-child .mwt-tabs-accordion_accordion-content').show().addClass('show');

        $('.mwt-tabs-accordion_accordion-title').click(function (e) {
            e.preventDefault();

            let $this = $(this);

            if ($this.next().hasClass('show')) {
                $this.removeClass('show');
                $this.next().removeClass('show');
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find('.mwt-tabs-accordion_accordion-title').removeClass('show');
                $this.parent().parent().find('.mwt-tabs-accordion_accordion-content').removeClass('show');
                $this.parent().parent().find('.mwt-tabs-accordion_accordion-content').slideUp(350);
                $this.toggleClass('show');
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
            }
        });
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-tabs-accordion.default',
            WidgetMWTTabsAccordion
        );
    });
})(jQuery);

/**
 * End mwt counter widget script
 */