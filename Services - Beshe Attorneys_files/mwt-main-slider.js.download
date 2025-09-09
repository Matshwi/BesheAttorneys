/**
 * Start main slider widget script
 */

(function ($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */

    var WidgetMainSlider = function ($scope, $) {
        var $flexsliderContainer = $scope.find(".mwt-elementor-main-slider-container");
        var $flexslider = $flexsliderContainer.find(".flexslider.main-slider");

        if (!$flexslider.length) {
            return;
        }

        $flexslider.each(function (index) {
            var $currentSlider = $(this);
            var data = $currentSlider.data();
            var nav = (data.nav !== 'undefined') ? data.nav : true;
            var dots = (data.dots !== 'undefined') ? data.dots : true;
            var slideshow = (data.slideshow !== 'undefined') ? data.slideshow : false;
            var speed = (data.speed !== 'undefined') ? data.speed : 5000;
            var animation = (data.animation !== 'undefined') ? data.animation : 'slide';
            var animationloop = (data.animationloop !== 'undefined') ? data.animationloop : false;
            var pauseonhover = (data.pauseonhover !== 'undefined') ? data.pauseonhover : false;

            //animations
            var layer1imageanimation = (data.layer1imageanimation !== 'undefined') ? data.layer1imageanimation : 'none';
            var layer2imageanimation = (data.layer2imageanimation !== 'undefined') ? data.layer2imageanimation : 'none';
            var layer1animation = (data.layer1animation !== 'undefined') ? data.layer1animation : 'none';
            var layer2animation = (data.layer2animation !== 'undefined') ? data.layer2animation : 'none';
            var layer3animation = (data.layer3animation !== 'undefined') ? data.layer3animation : 'none';
            var layer4animation = (data.layer4animation !== 'undefined') ? data.layer4animation : 'none';
            var layer5animation = (data.layer5animation !== 'undefined') ? data.layer5animation : 'none';
            var layer6animation = (data.layer6animation !== 'undefined') ? data.layer6animation : 'none';
            var layer7animation = (data.layer7animation !== 'undefined') ? data.layer7animation : 'none';
            var buttonanimation = (data.buttonanimation !== 'undefined') ? data.buttonanimation : 'none';

            //animation delay
            var layer1imagedelay = (data.layer1imagedelay !== 'undefined') ? data.layer1imagedelay : 250;
            var layer2imagedelay = (data.layer2imagedelay !== 'undefined') ? data.layer2imagedelay : 250;
            var layer1delay = (data.layer1delay !== 'undefined') ? data.layer1delay : 250;
            var layer2delay = (data.layer2delay !== 'undefined') ? data.layer2delay : 250;
            var layer3delay = (data.layer3delay !== 'undefined') ? data.layer3delay : 250;
            var layer4delay = (data.layer4delay !== 'undefined') ? data.layer4delay : 250;
            var layer5delay = (data.layer5delay !== 'undefined') ? data.layer5delay : 250;
            var layer6delay = (data.layer6delay !== 'undefined') ? data.layer6delay : 250;
            var layer7delay = (data.layer7delay !== 'undefined') ? data.layer7delay : 250;
            var buttondelay = (data.buttondelay !== 'undefined') ? data.buttondelay : 250;
            var cornerdelay = (data.cornerdelay !== 'undefined') ? data.cornerdelay : 250;

            var number = $currentSlider.data('number');

            $currentSlider.flexslider({
                animation: animation,
                pauseOnHover: pauseonhover,
                useCSS: true,
                controlNav: dots,
                directionNav: nav,
                customDirectionNav: $('.flex-direction-nav-' + number + ' a'),
                prevText: "",
                nextText: "",
                smoothHeight: false,
                slideshow: slideshow,
                slideshowSpeed: speed,
                animationSpeed: 600,
                animationLoop: animationloop,

                start: function (slider) {
                    slider.find('.flex-control-nav li a').attr('data-after', slider.count);
                    slider.find('.mwt-elementor-main-slider-image-animation').css({ 'visibility': 'hidden' });
                    slider.find('.flex-active-slide .mwt-elementor-main-slider-image-middle-wrap .mwt-elementor-main-slider-image-middle').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer1imageanimation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer1imagedelay);
                    });
                    slider.find('.flex-active-slide .mwt-elementor-main-slider-image-upper-wrap .mwt-elementor-main-slider-image-upper').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer2imageanimation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer2imagedelay);
                    });
                    slider.find('.slide_layers').children().css({ 'visibility': 'hidden' });
                    //corners top
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-top-corners-left').each(function (index) {
                        var self = $(this);
                        var animationClass = 'fadeInLeft';
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, cornerdelay + 750);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-top-corners-right').each(function (index) {
                        var self = $(this);
                        var animationClass = 'fadeInRight';
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, cornerdelay + 500);
                    });
                    //end corners top
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-1').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer1animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer1delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-2').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer2animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer2delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-3').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer3animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer3delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-4').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer4animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer4delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-5').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer5animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer5delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-6').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer6animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer6delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-7').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer7animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer7delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-buttons-wrap').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? buttonanimation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, buttondelay);
                    });
                    //corners bottom
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-bottom-corners-left').each(function (index) {
                        var self = $(this);
                        var animationClass = 'fadeInLeft';
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, cornerdelay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-bottom-corners-right').each(function (index) {
                        var self = $(this);
                        var animationClass = 'fadeInRight';
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, cornerdelay + 250);
                    });
                    //end corners bottom
                },
                after: function (slider) {
                    slider.find('.flex-control-nav li a').attr('data-after', slider.count);
                    slider.find('.flex-active-slide .mwt-elementor-main-slider-image-middle-wrap .mwt-elementor-main-slider-image-middle').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer1imageanimation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer1imagedelay);
                    });
                    slider.find('.flex-active-slide .mwt-elementor-main-slider-image-upper-wrap .mwt-elementor-main-slider-image-upper').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer2imageanimation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer2imagedelay);
                    });
                    //corners top
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-top-corners-left').each(function (index) {
                        var self = $(this);
                        var animationClass = 'fadeInLeft';
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, cornerdelay + 750);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-top-corners-right').each(function (index) {
                        var self = $(this);
                        var animationClass = 'fadeInRight';
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, cornerdelay + 500);
                    });
                    //end corners top
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-1').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer1animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer1delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-2').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer2animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer2delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-3').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer3animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer3delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-4').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer4animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer4delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-5').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer5animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer5delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-6').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer6animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer6delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-layer-7').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer7animation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, layer7delay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-buttons-wrap').each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? buttonanimation : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, buttondelay);
                    });
                    //corners bottom
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-bottom-corners-left').each(function (index) {
                        var self = $(this);
                        var animationClass = 'fadeInLeft';
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, cornerdelay);
                    });
                    slider.find('.flex-active-slide .slide_layers .mwt-elementor-main-slider-bottom-corners-right').each(function (index) {
                        var self = $(this);
                        var animationClass = 'fadeInRight';
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, cornerdelay + 250);
                    });
                    //end corners bottom
                },
                end: function (slider) {
                    slider.find('.flex-control-nav li a').attr('data-after', slider.count);
                    slider.find('.mwt-elementor-main-slider-image-middle-wrap .mwt-elementor-main-slider-image-middle').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer1imageanimation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.mwt-elementor-main-slider-image-upper-wrap .mwt-elementor-main-slider-image-upper').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer2imageanimation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    //corners top
                    slider.find('.slide_layers .mwt-elementor-main-slider-top-corners-left').each(function () {
                        var self = $(this);
                        var animationClass = 'fadeInLeft';
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-top-corners-right').each(function () {
                        var self = $(this);
                        var animationClass = 'fadeInRight';
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    //end corners top
                    slider.find('.slide_layers .mwt-elementor-main-slider-layer-1').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer1animation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-layer-2').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer2animation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-layer-3').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer3animation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-layer-4').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer4animation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-layer-5').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer5animation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-layer-6').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer6animation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-layer-7').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? layer7animation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-buttons-wrap').each(function () {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? buttonanimation : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    //corners bottom
                    slider.find('.slide_layers .mwt-elementor-main-slider-bottom-corners-left').each(function () {
                        var self = $(this);
                        var animationClass = 'fadeInLeft';
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    slider.find('.slide_layers .mwt-elementor-main-slider-bottom-corners-right').each(function () {
                        var self = $(this);
                        var animationClass = 'fadeInRight';
                        self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                    });
                    //end corners bottom
                },
            })

        });

        if (document.querySelector('.mwt-elementor-main-slider-video')) {
            var $videobg = document.querySelector('.mwt-elementor-main-slider-video');
            var $src = $videobg.querySelector('source').getAttribute('src');
            var $time = $videobg.querySelector('source').dataset.time;

            if ($videobg.paused) {
                $videobg.querySelector('source').src = $src;
                $videobg.load();
                $videobg.currentTime = 0;
                $videobg.volume = 0;
                $videobg.play();

                $videobg.addEventListener('timeupdate', function () {
                    if (this.currentTime >= $time) {
                        $videobg.currentTime = 0;
                        $videobg.volume = 0;
                        $videobg.play();
                    }
                });
            }

            $('.slides').on('classChanged', 'li:first', function () {
                $videobg.currentTime = 0;
                $videobg.volume = 0;
                $videobg.play();
                $videobg.addEventListener('timeupdate', function () {
                    if (this.currentTime >= 26) {
                        $videobg.currentTime = 0;
                        $videobg.volume = 0;
                        $videobg.play();
                    }
                })
            });
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction(
            'frontend/element_ready/mwt-main-slider.default',
            WidgetMainSlider
        );
    });
})(jQuery);

/**
 * End main slider widget script
 */