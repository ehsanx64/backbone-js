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

        // Let's create two shops first
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
        console.log('First shop sell: ' + firstShop.get('brand'));
        console.log('Second shop sell: ' + secondShop.get('brand'));
    });
})(jQuery);
