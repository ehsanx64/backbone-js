var Shop = Backbone.Model.extend({
   defaults: {
       brand: '',
       type: '',
       price: 900,
       stock: 0
   }
});

(function ($) {
    $(function () {
        console.log('Running onready callback from ts1');

        // Enable terminal.js for ts1 console
        var term = new Terminal();
        term.setBackgroundColor('#D9DDF2');
        term.setTextColor('#332163');

        $('#ts1-terminal').append(term.html);
        term.print("Terminal enabled...");

        // Let's create two shops first
        term.print("Creating two shops...");
        var firstShop = new Shop({
            brand: 'Rolex',
            type: 'Wrist Watch',
            price: 900,
            stock: 8
        });

        var secondShop = new Shop({
            brand: 'Michael Korrs',
            type: 'Wrist Watch',
            price: 400,
            stock: 16
        });


        // Show which brands each shop has
        term.print('First shop sell: ' + firstShop.get('brand'))
        term.print('Second shop sell: ' + secondShop.get('brand'))
    });
})(jQuery);
