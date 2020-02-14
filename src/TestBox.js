export var TestBox = Backbone.View.extend({
    template: _.template($('#test-box-tpl').html()),
    drawerOpen: false,
    data: {},

    events: {
        'click .toggle-drawer': 'toggleDrawer'
    },

    initialize: function (opt) {
        this.data = {
            image: opt.image,
            title: opt.title,
            content: opt.content
        };
        this.render();  
    },

    render: function () {
        this.$el.html(this.template(this.data));
    },

    toggleDrawer: function (event) {
        event.preventDefault();
        var $t = $(event.target);
        var $boxDrawer = this.$el.find('.box-drawer');

        if (this.drawerOpen) {
            $boxDrawer.removeClass('open');
            $t.removeClass('icofont-minus').addClass('icofont-plus');
            this.drawerOpen = false;
        } else {
            $t.removeClass('icofont-plus').addClass('icofont-minus');
            $boxDrawer.addClass('open');
            this.drawerOpen = true;

        }
    }
});

