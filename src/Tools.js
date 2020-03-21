export function L18n() {
    this.locale = '';

    var that = this;

    this.getTranslations = function () {
        switch (this.locale) {
            case 'fa':
                return require('./xlate-fa').default;
                break;
            case 'en':
            default:
                return require('./xlate-en').default;
                break;
        }
    }

    this.translate = function (key) {
        if (this.xlates[key] != undefined) {
            return this.xlates[key];
        }

        return key;
    }

    this.translateAll = function () {
        jQuery('[data-xlate]').each(function (index, elem) {
            $(elem).html(that.translate($(elem).data('xlate')));
        });
    }

    this.init = function () {
        // Get and set the locale
        this.locale = 'en';

        // Load translations
        this.xlates = this.getTranslations();
    }

    this.init();
};

