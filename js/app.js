/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);

t1v = new Test1View();
t2v = new Test2View();
testbox = new TestBox({'el': '#test-3'});

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

Test1View = Backbone.View.extend({
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

Test2Model = Backbone.Model.extend({
    defaults: {
        name: 'User'
    }
});

Test2View = Backbone.View.extend({
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
})

/***/ }),
/* 3 */
/***/ (function(module, exports) {

TestBox = Backbone.View.extend({
    template: _.template($('#test-box-tpl').html()),
    drawerOpen: false,

    events: {
        'click .toggle-drawer': 'toggleDrawer'
    },

    initialize: function () {
        this.render();  
    },

    render: function () {
        this.$el.html(this.template({
            'title': 'The Title',
            'content': '<p><strong>Hello</strong> here man!</p>'
        }));
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
})

/***/ })
/******/ ]);