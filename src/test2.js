(function ($) {
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
            var val = event.target.value;

            // If textbox for name is empty use default value
            if (val.length == 0) {
                this.model.set('name', this.model.defaults.name);
            } else {
                this.model.set('name', val);
            }
        },

        click: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
        }
    });

    $(function () {


        var t2v = new Test2View();
    })
})(jQuery);
