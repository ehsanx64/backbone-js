(function ($) {
    $.ajaxPrefilter(function (options, originalOptions, jqXhr) {
        options.url = 'http://yii-api.loc' + options.url;
    });

    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    var Persons = Backbone.Collection.extend({
        url: '/person'
    });

    var Person = Backbone.Model.extend({
        urlRoot: '/person'
    });

    var PersonManager = Backbone.View.extend({
        params: {
            currentPage: 'home',
            pageWrapper: '.person-manager-page',
        },

        el: '#person-manager',

        events: {
            "click button.add-person": "handleAddPersonClick",
            "submit .person-form": "handlePersonFormSubmit"
        },

        initialize: function () {
            this.render();
        },

        getHomeTpl: function () {
            var output = `
                <h3>Person List</h3>
                <hr />
                <table class="table table-striped">
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <% _.each(data, function(item) { %>
                            <tr>
                                <td><%= item.get('name') %></td>
                                <td><%= item.get('age') %></td>
                                <td></td>
                            </tr>
                        <% }); %>
                    </tbody>
                </table>
            `;

            return _.template(output);
        },

        getUserFormTpl: function () {
            var output = `
                <h3>Add Person</h3>
                <hr />
                <form class="row person-form">
                    <div class="col-xs-12 col-sm-6 form-group">
                        <label for="name">Name:</label> 
                        <input name="name" class="form-control" type="text" />
                    </div>
                    <div class="col-xs-12 col-sm-6 form-group">
                        <label for="age">Age:</label> 
                        <input name="age" class="form-control" type="text" />
                    </div>
                    <div class="form-group">
                        <input class="btn btn-primary pull-right person-form-submit" type="submit" value="Create Person" />
                    </div>
                </form>
            `;

            return _.template(output);
        },

        handlePersonFormSubmit: function (evt) {
            var that = this;
            evt.preventDefault();
            var userData = $(evt.target).serializeObject();
            var p = new Person();
            p.save(userData, {
                success: function (data) {
                    that.params.currentPage = 'home';
                    that.render();
                }
            });
        },

        handleAddPersonClick: function () {
            this.params.currentPage = 'person-form';
            this.render();
        },

        renderPage: function (data) {
            var tpl = '';

            switch (this.params.currentPage) {
                case 'home':
                    tpl = this.getHomeTpl();
                    break;
                case 'person-form':
                    tpl = this.getUserFormTpl();
                    break;
                default:
                    tpl = this.getHomeTpl();
                    break;
            }

            $(this.params.pageWrapper).html(tpl(data));
        },

        render: function () {
            var that = this;
            var persons = new Persons();

            persons.fetch({
                success: function (data) {
                    that.renderPage({data: data.models});
                }
            });

            this.$el.html(`
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <h3>Person Manager</h3>
                        <p>Simple Person Manager</p>
                        <hr />
                        <h4>Operations:</h4>
                        <button class="btn btn-primary add-person">Add Person</button>
                    </div>
                    <div class="col-xs-12 col-sm-8 person-manager-page"></div>
                </div>
            `);
        }
    });

    $(document).ready(function () {
        var personManager = new PersonManager();
    });
})(jQuery);

