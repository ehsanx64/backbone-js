(function ($) {
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

    $(function () {
        var t1v = new Test1View();
    })
})(jQuery);
