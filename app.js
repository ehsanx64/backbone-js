// Create a new model class using Backbone.js (by extending it)
var Person = Backbone.Model.extend({
    defaults: {

    }
});

// Now create an instance of Person class
var me = new Person({
    name: 'Ehsan',
    age: 32,
    sex: 'Male'
});


console.log(Person);
console.log(me);
