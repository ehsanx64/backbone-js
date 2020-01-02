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
            $('#basic-test-area .box-plus').click(function (event) {
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
                console.log('Service plus button clicked');
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

/**
 * Tests
 */
var Test1View = Backbone.View.extend({
    el: '#test-1',
    $el: $('#test-1'),
    template: _.template($('#test-1-tpl').html()),

    initialize: function() {
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
    }
});

var Test2Model = Backbone.Model.extend({
    defaults: {
        name: 'User'
    }
});

var Test2View = Backbone.View.extend({
    el: '#test-2',
    template: _.template($('#test-2-tpl').html()),
    model: new Test2Model(),

    events: {
        'click button.btn': 'click',
        'keyup input.username': 'nameChange'
    },

    initialize: function () {
        this.$el = $(this.el);
        this.render();
    },

    nameChange: function (event) {
        this.model.set('name', event.target.value);
    },

    click: function () {
        this.render();
    },

    render: function () {
       this.$el.html(this.template(this.model.attributes));
    }
})

t1v = new Test1View();
t2v = new Test2View();


var p = new People;
p.add(new Person({
	name: 'Ivan',
	age: 32,
	sex: 'Male'
}));

p.add(new Person({
	name: 'Jack',
	age: 23,
	sex: 'Male'
}));

p.add(new Person({
	name: 'Georgina',
	age: 18,
	sex: 'Female'
}));

p.add(new Person({
	name: 'Rosie',
	age: 48,
	sex: 'Female'
}));

var PersonView = Backbone.View.extend({
	// template: _.template($('#people-list-item-tpl').html()),
	// initialize: function () {
	// },

	// render: function () {
	// 	return this.template((this.model.attributes));
	// }
});

var PeopleView = Backbone.View.extend({
	el: '#people-list-wrapper',

	initialize: function () {
		this.render();
	},

	render: function () {
		this.$el.html('');
		var that = this;

		// If there are persons to list first create the wrapper node
		if (p.length > 0) {
			this.$el.html(_.template($('#people-list-tpl').html()));
			var tgt = $('#people-list');

			p.each(function (person) {
				var person = new PersonView({
					model: person
				});
				tgt.append(person.render());
			});
		} else {
			var error = _.template($('#empty-people-list-tpl').html());
			this.$el.html(error({ message: 'Empty List' }));
		}
	}
});


// var pv = new PeopleView;
