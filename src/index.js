require('./test1');
require('./test2');
require('./TestBox');

t1v = new Test1View();
t2v = new Test2View();

require('./test3');
require('./test4');


(function ($) {
    $(function () {
        console.log('### App.js loaded');

        /* If elements carousel demo element exists enable owlCarousel for it */
        if ($('.elements-carousel').length > 0) {
            $('.elements-carousel').owlCarousel({
                loop: true,
                margin: 0,
                responsiveClass: true,
                nav: true,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 1000,
                navText: ['<i class="icofont icofont-rounded-left"></i>', '<i class="icofont icofont-rounded-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        }

        /* Attach click handlers for service plus buttons if needed */
        if ($('#basic-test-area .box-plus').length > 0) {
            var $parentBox, $target;
            $('#basic-test-area .primitive-test-box.box-plus').click(function (event) {
                event.preventDefault();
                $parentBox = $(event.target).parents('.service-box');
                $target = $parentBox.find('.box-drawer');
                if ($target.hasClass('open')) {
                    $parentBox.find('.icofont').removeClass('icofont-minus').addClass('icofont-plus');
                    $target.removeClass('open');
                } else {
                    $parentBox.find('.icofont').removeClass('icofont-plus').addClass('icofont-minus');
                    $target.addClass('open');

                }
            });
        }
    })
})(jQuery);

// Create a new model class using Backbone.js (by extending it)
var Person = Backbone.Model.extend({
	defaults: {}
});

// Create a collection for holding Person objects
var People = Backbone.Collection.extend({
	model: Person
});